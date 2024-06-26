import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities.js";
import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from "react-leaflet";
// Import required D3 modules
import { interpolateYlGnBu } from "d3";
import { scaleLinear } from "d3";
import Legend from "./Legend.js";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";

const Map = (props) => {
  // initialize everything
  const [popupContent, setPopupContent] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);
  const [mapAB, setMap] = useState(null);
  const [geojson, setGeojson] = useState(null);
  const [legend, setLegend] = useState(null);
  let demographic = props.filter;
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
      console.log("props: ", feature.properties);
      const popupContent =
        "This is " +
        feature.properties["NAMELSAD10"] +
        "</b> <br>" +
        "Number of " +
        props.filterName +
        " <b>" +
        feature.properties[demographic] +
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
        if (jfeature.properties[tract_name] === feature.tract) {
          jfeature.properties = { ...jfeature.properties, ...feature.data };
        }
      });
    }
  };

  useEffect(() => {
    const initBody = { year: props.year };
    demographic = props.filter;
    get("/api/oldGeoJSON", initBody)
      .then((output) => {
        if (props.year < 2010) {
          setMap(output);
        } else {
          const newBody = { year: props.year, vars: demographic };
          get("/api/newGeoJSON", newBody)
            .then((feature_output) => {
              let tract_name = "TRACTCE10";
              if (props.year === 2020) {
                const tract_name = "TRACTCE";
              }
              addFeatures(output, feature_output, tract_name);
              console.log("f:", feature_output);
              console.log("added: ", output);
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
      demographic = "B01003_001E";
      console.log(mapAB.features);
      const demographicCategory = mapAB.features.map((feature) => feature.properties[demographic]);
      // console.log("category: ", demographic);
      console.log("category: ", demographicCategory);

      // modify only after the map changed
      if (demographicCategory[0] !== undefined) {
        // Define the color scale
        const colorScale = scaleLinear()
          .domain([Math.min(...demographicCategory), Math.max(...demographicCategory)])
          .range([0.3, 1]);

        // Create a function to get the color for a given data point
        const getColorForValue = (value) => interpolateYlGnBu(colorScale(parseFloat(value)));
        // color the map
        styleFunction = (feature) => {
          return {
            color: getColorForValue(feature.properties[demographic]) || "red", // Default color if not specified -> smth went wrong
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
          getColorForValue(feature.properties[demographic]),
        ]);
        console.log("color: ", getColorForValue("2865"), getColorForValue("5353"));
        console.log("all", allColors);

        setLegend(
          <Legend
            legendItems={mapAB.features}
            legendFilter={demographic}
            allColors={allColors}
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
