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
  let demographic = props.filter;

  const calculateDemographicData = (map) => {
    const demographicData = {};
    for (const feature of mapAB.features) {
      // console.log(feature.properties.GISJOIN2);
      demographicData[feature.properties.GISJOIN2] = 0;
      for (const varName of props.filter) {
        //console.log(feature.properties[varName]);
        // WILL LIKELY HAVE TO CHANGE THIS LINE TO HAVE FUNCTION TO GET VAR SO CAN USE API FOR 2010 & AFTER
        demographicData[feature.properties.GISJOIN2] += feature.properties[varName];
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

      // generate object of feature: demographic value
      const demographicData = calculateDemographicData(mapAB);
      console.log("demographic data is ", demographicData);
      const demographicCategory = Object.values(demographicData);
      console.log(demographicCategory);
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

        // assigning the income categories

        const getTotalIncomes = (map, censusMapping) => {
          // build array that is sum of values at each income bracket for each census tract
          const incomeVars = censusMapping["Household Income"];
          const incomeValues = Object.values(incomeVars).map((item) => {
            let value = 0;
            for (const feature of map.features) {
              // console.log("feature properties", feature.properties[item]);
              value += feature.properties[item];
            }
            return value;
          });

          const totalIncomeLevels = {};
          let i = 0;
          for (const incomeLevel of Object.keys(incomeVars)) {
            totalIncomeLevels[incomeLevel] = incomeValues[i];
            i++;
          }
          return totalIncomeLevels;
        };
        const assignIncomeCategories = (map, censusMapping) => {
          if (map === null || map == undefined) {
            console.log("map null");
            return;
          }
          const data = getTotalIncomes(map, censusMapping);

          // make the quantiles
          // Remove the "Number of Households" entry as it is not a category
          //  console.log("total households originally in data", data["Number of Households"]);
          delete data["Number of Households"];

          // Convert the data object to an array of objects for easier processing
          const dataArray = Object.entries(data).map(([key, value]) => ({
            category: key,
            households: value,
          }));

          // Define the number of quantile categories
          const numCategories = 5;
          const categories = [
            "Low Income",
            "Lower-Middle Income",
            "Middle Income",
            "Upper-Middle Income",
            "High Income",
          ];

          //  console.log("data is", data);

          // Calculate total number of households
          const totalHouseholds = dataArray.reduce((sum, item) => sum + item.households, 0);
          //  console.log("total households", totalHouseholds);

          // Calculate quantile thresholds
          const quantileStep = totalHouseholds / numCategories;
          const quantiles = Array.from({ length: numCategories }, (_, i) => i * quantileStep);

          // Function to assign quantile category based on cumulative sum
          function assignQuantileCategory(cumulativeHouseholds, quantiles) {
            for (let i = 0; i < quantiles.length - 1; i++) {
              if (cumulativeHouseholds >= quantiles[i] && cumulativeHouseholds < quantiles[i + 1]) {
                return categories[i];
              }
            }
            return categories[quantiles.length - 1];
          }

          // Calculate cumulative sum of households and assign quantile categories
          let cumulativeHouseholds = 0;
          const categorizedData = [];
          const result = Object.fromEntries(categories.map((category) => [category, []]));

          dataArray.forEach((item) => {
            cumulativeHouseholds += item.households;
            const quantileCategory = assignQuantileCategory(cumulativeHouseholds, quantiles);
            categorizedData.push({ ...item, quantileCategory });
            result[quantileCategory].push(censusMapping["Household Income"][item.category]);
          });

          // Aggregate data by quantile category
          const aggregatedData = categorizedData.reduce((acc, item) => {
            if (!acc[item.quantileCategory]) {
              acc[item.quantileCategory] = { category: item.quantileCategory, households: 0 };
            }
            acc[item.quantileCategory].households += item.households;
            return acc;
          }, {});
          //  console.log("result is", result);
          //  console.log("aggregated data", Object.values(aggregatedData));
          return result;
        };

        assignIncomeCategories(mapAB, censusMapping[props.year]);

        //console.log(censusMapping[props.year]);

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
