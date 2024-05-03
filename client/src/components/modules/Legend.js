import React from "react";
import { interpolateYlGnBu } from "d3-scale-chromatic";

// Define your Legend component
const Legend = (props) => {
  // const legendColors = props.legendItems.map(
  //   (item) => props.allColors.find(([feature, color]) => feature === item.properties.GISJOIN2)[1]
  // );

  const legendWidth = 200;

  // Style the legend as per your requirement
  const legendStyle = {
    backgroundColor: "white",
    padding: "2px",
    border: "1px solid #ccc",
    position: "absolute",
    zIndex: 1000,
    bottom: "10px", // Adjust bottom position as needed
    left: "10px", // Adjust left position as needed
  };

  // Render the continuous color bar legend
  const renderContinuousLegend = () => {
    return (
      <div>
        <div
          style={{
            width: legendWidth,
            height: "20px",
            background: `linear-gradient(to right, ${interpolateYlGnBu(0.3)}, ${interpolateYlGnBu(
              1
            )})`,
          }}
        ></div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
          <span>{props.minValue}</span>
          <span>{props.maxValue}</span>
        </div>
      </div>
    );
  };

  return (
    <div style={legendStyle}>
      <p style={{ fontWeight: "bold", margin: "4px" }}>{props.filterName}</p>
      {renderContinuousLegend()}
    </div>
  );
};

export default Legend;
