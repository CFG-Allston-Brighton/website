import React, { useState } from "react";
import SingleMap from "../modules/SingleMap.js";
// import SideMenu from "../modules/Menu.js";
import "./Maps.css";
const Maps = (props) => {
  const [showMaps, setShowMaps] = useState(false);
  const handleCheckbox = (show) => {
    setShowMaps(show);
  };
  return (
    <div className="Maps-page">
      {showMaps ? (
        <div className="Maps">
          <SingleMap key={"left"} handleCheckBox={handleCheckbox} />
          <SingleMap key={"right"} handleCheckBox={handleCheckbox} />
        </div>
      ) : (
        <SingleMap key={"left"} handleCheckBox={handleCheckbox} />
      )}
    </div>
  );
};
export default Maps;
