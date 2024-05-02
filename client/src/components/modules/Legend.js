import React from "react";
import { interpolateYlGnBu } from "d3-scale-chromatic";

// Define your Legend component
const Legend = (props) => {
  console.log("filter name from inside legend", props.filterName);
  const legendColors = props.legendItems.map(
    (item) => props.allColors.find(([feature, color]) => feature === item.properties.GISJOIN2)[1]
  );

  // Deduplicate the array to get unique colors
  const uniqueLegendColors = [...new Set(legendColors)];

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

  // // Render the continuous scale legend
  // const renderContinuousLegend = () => {
  //   // Sort the uniqueLegendColors array to arrange colors in ascending order
  //   const sortedColors = uniqueLegendColors.sort();

  //   // Calculate the width of each color segment in the legend
  //   const segmentWidth = 100 / sortedColors.length;

  //   return (
  //     <div>
  //       {sortedColors.map((color, index) => (
  //         <div
  //           key={index}
  //           style={{ display: "inline-block", textAlign: "center", width: `${segmentWidth}%` }}
  //         >
  //           <div
  //             style={{
  //               backgroundColor: color,
  //               width: "20px",
  //               height: "20px",
  //               display: "inline-block",
  //             }}
  //           ></div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div style={legendStyle}>
      <p style={{ fontWeight: "bold", margin: "4px" }}>{props.filterName}</p>
      {renderContinuousLegend()}
    </div>
  );

  // // Style the legend as per your requirement
  // const legendStyle = {
  //   backgroundColor: "white",
  //   padding: "2px",
  //   border: "1px solid #ccc",
  //   position: "absolute",
  //   zIndex: 1000,
  //   bottom: "10px", // Adjust bottom position as needed
  //   left: "10px", // Adjust left position as needed
  // };

  // // Render the legend items
  // const renderLegendItems = () => {
  //   const sortedLegendItems = props.legendItems.slice().sort((a, b) => {
  //     return a.properties[props.legendFilter] - b.properties[props.legendFilter];
  //   });
  //   console.log("printing legend", sortedLegendItems);
  //   // props.legendItems.sort((a, b) => {
  //   //   a.properties[props.legendFilter] - b.properties[props.legendFilter];
  //   // });
  //   return sortedLegendItems.map((item, idx) => (
  //     <div key={idx}>
  //       <span
  //         style={{
  //           backgroundColor: props.allColors.filter(
  //             ([feature, color]) => feature === item.properties.GISJOIN2
  //           )[0][1],
  //           width: "20px",
  //           height: "20px",
  //           display: "inline-block",
  //         }}
  //       ></span>
  //       <span style={{ marginLeft: "5px" }}>{item.properties[props.legendFilter]}</span>
  //     </div>
  //   ));
  // };

  // return (
  //   <div style={legendStyle}>
  //     <p style={{ fontWeight: "bold", margin: "4px" }}>Legend</p>
  //     {renderLegendItems()}
  //   </div>
  // );
};

export default Legend;
