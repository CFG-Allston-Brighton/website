import React, { useState } from "react";
import SingleMap from "../modules/SingleMap.js";
// import SideMenu from "../modules/Menu.js";
import "./Maps.css";
const Maps = (props) => {
  return (
    <div className="Maps-page">
      <div className="Maps">
        <SingleMap year={"2000"} />
        <SingleMap year={"2000"} />
      </div>
    </div>
  );
};
export default Maps;
