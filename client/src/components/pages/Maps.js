import React, { useState } from "react";
import SingleMap from "../modules/SingleMap.js";
import "./Maps.css";
const Maps = (props) => {
  const [showMaps, setShowMaps] = useState(true);
  const handleCheckbox = (show) => {
    setShowMaps(show);
  };

  return (
    <div className="Maps-page">
      {showMaps ? (
        <div className="Maps">
          <SingleMap key={"left"} handleCheckBox={handleCheckbox} className="Side-by-Side-Maps" />
          <SingleMap key={"right"} handleCheckBox={handleCheckbox} className="Side-by-Side-Maps" />
        </div>
      ) : (
        <SingleMap key={"left"} handleCheckBox={handleCheckbox} className="Single-Map" />
      )}
    </div>
  );
};
export default Maps;
