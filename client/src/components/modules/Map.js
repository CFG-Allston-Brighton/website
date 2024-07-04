import React, { useState, useEffect } from "react";
import { get } from "../../utilities.js";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
// Import required D3 modules
import { interpolateYlGnBu } from "d3";
import { scaleLinear } from "d3";
import censusMapping from "../CensusMapping.js";
import Legend from "./Legend.js";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = (props) => {
  // initialize everything
  const [popupContent, setPopupContent] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const [mapAB, setMap] = useState(null);
  const [geojson, setGeojson] = useState(null);
  const [legend, setLegend] = useState(null);
  let demographic = typeof props.filter === "string" ? props.filter.split(",") : props.filter;

  const calculateDemographicData = (map) => {
    const demographicData = {};
    for (const feature of mapAB.features) {
      demographicData[feature.properties.GISJOIN2] = 0;
      for (const varName of props.filter) {
        // WILL LIKELY HAVE TO CHANGE THIS LINE TO HAVE FUNCTION TO GET VAR SO CAN USE API FOR 2010 & AFTER
        demographicData[feature.properties.GISJOIN2] += Number(feature.properties[varName]);
      }
    }
    return demographicData;
  };

  let styleFunction = (feature) => {
    return {
      color: "red", // Default color if not specified
      fillOpacity: 0.6, // You can set other style properties here, like weight, fill color, etc.
    };
  };

  // Function to handle click event on GeoJSON feature - POPUPS
  const handleFeatureClick = (event) => {
    // Bind popup to the clicked feature
    const feature = event.layer.feature;
    if (feature.properties) {
      // Set the content for the popup
      let tractVar = "jGeo_TRACT";
      if (props.year === 1980) {
        tractVar = "JGeo_TRACT";
      }
      const popupContent =
        "This is tract " +
        feature.properties[tractVar] / 100 +
        "</b> <br>" +
        "Number of " +
        props.filterName +
        " <b>" +
        demographic
          .map((var_name) => feature.properties[var_name])
          .reduce((accumulator, currentValue) => {
            return accumulator + Number(currentValue);
          }, 0) +
        "</b> </br>";
      setPopupContent(popupContent);

      // Set the position for the popup
      setPopupPosition(event.latlng);
    }
  };
  /**
   * map -> map to set geojson
   * features -> is an object containg the tract number and data
   * modify the map.features.properties to add the feature data
   */
  const addFeatures = (map, features, tract_name) => {
    for (const feature of features) {
      map.features.forEach((jfeature) => {
        if (jfeature.properties[tract_name] === parseInt(feature.tract)) {
          jfeature.properties = { ...jfeature.properties, ...feature.data };
        }
      });
    }
  };

  const addGIS = (map) => {
    let id = "GEOID10";
    let tract_name = "TRACTCE10";
    if (Number(props.year) === 2020) {
      id = "GEOID";
      tract_name = "TRACTCE";
    }
    map.features.forEach((jfeature) => {
      jfeature.properties = {
        ...jfeature.properties,
        ...{
          GISJOIN2: jfeature.properties[id],
          jGeo_TRACT: parseInt(jfeature.properties[tract_name]),
        },
      };
    });
  };

  useEffect(() => {
    const initBody = { year: props.year };
    demographic = typeof props.filter === "string" ? props.filter.split(",") : props.filter;
    // UNCOMMENT LINES BELOW FOR INCOME CALCULATION
    // const new_demo = Object.values(censusMapping[props.year]["Household Income"]);
    // demographic = demographic.concat(new_demo);
    get("/api/oldGeoJSON", initBody)
      .then((output) => {
        if (Number(props.year) < 2010) {
          setMap(output);
        } else {
          addGIS(output);
          const newBody = { year: props.year, vars: demographic };
          get("/api/newGeoJSON", newBody)
            .then((feature_output) => {
              const tract_name = "jGeo_TRACT";
              // if (props.year === 2020) {
              //   const tract_name = "TRACTCE";
              // }
              console.log("featureoutput", feature_output);
              addFeatures(output, feature_output, tract_name);
              setMap(output);
            })
            .catch((error) => {
              console.error("Error while getting new GeoJSON data from MongoDB", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error while getting old GeoJSON data from MongoDB", error);
      });
  }, [props]);

  useEffect(() => {
    if (mapAB !== null && mapAB !== undefined) {
      // select colorscale based on data

      // generate object of feature: demographic value
      const demographicData = calculateDemographicData(mapAB);
      const demographicCategory = Object.values(demographicData);
      // modify only after the map changed
      if (demographicCategory[0] !== undefined) {
        // Define the color scale
        const colorScale = scaleLinear()
          .domain([Math.min(...demographicCategory), Math.max(...demographicCategory)])
          .range([0.3, 1]);

        // Create a function to get the color for a given data point
        const getColorForValue = (value) => interpolateYlGnBu(colorScale(value));
        // color the map
        styleFunction = (feature) => {
          return {
            color: getColorForValue(demographicData[feature.properties.GISJOIN2]) || "red", // Default color if not specified -> smth went wrong
            fillOpacity: 0.6,
          };
        };

        setGeojson(
          <GeoJSON
            data={mapAB}
            style={styleFunction}
            eventHandlers={{ click: handleFeatureClick }}
            key={JSON.stringify(mapAB)}
          />
        );

        const allColors = mapAB.features.map((feature) => [
          feature.properties.GISJOIN2,
          getColorForValue(demographicData[feature.properties.GISJOIN2]),
        ]);

        setLegend(
          <Legend
            minValue={Math.min(...demographicCategory)}
            maxValue={Math.max(...demographicCategory)}
            legendItems={mapAB.features}
            legendFilter={demographic}
            allColors={allColors}
            filterName={props.filterName}
            key={JSON.stringify(mapAB) + "legend"}
          />
        );
      }
    }
  }, [mapAB]);

  return (
    <div className="Map">
      <MapContainer
        center={[42.35346337378607, -71.14454379278231]}
        zoom={13}
        scrollWheelZoom={true}
        className="Map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geojson}
        {legend}
        {popupContent && popupPosition && (
          <Popup
            position={popupPosition}
            onClose={() => {
              setPopupContent(null);
              setPopupPosition(null);
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: popupContent }} />
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
