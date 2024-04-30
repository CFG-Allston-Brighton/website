import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities.js";
import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from "react-leaflet";
// Import required D3 modules
import { interpolateYlGnBu } from "d3";
import { scaleLinear } from "d3";
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
      const popupContent =
        "Number of " + props.filterName + "<br>" + feature.properties[demographic];
      setPopupContent(popupContent);

      // Set the position for the popup
      setPopupPosition(event.latlng);
    }
  };

  useEffect(() => {
    demographic = props.filter;
    const body = { name: props.year };
    get("/api/allGeoJSON", body)
      .then((output) => {
        setMap(output);
      })
      .catch((error) => {
        console.error("Error while getting GeoJSON data from MongoDB", error);
      });
  }, [props]);

  useEffect(() => {
    if (mapAB !== null && mapAB !== undefined) {
      // select colorscale based on data
      const demographicCategory = mapAB.features.map((feature) => feature.properties[demographic]);
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

  // useEffect(() => {
  //   console.log("geojson is now", geojson);
  // }, [geojson]);

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
