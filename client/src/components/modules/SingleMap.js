import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import "./SingleMap.css";
const SingleMap = (props) => {
  const [category, setCategory] = useState("JSE_T006_0");
  const [categoryName, setCategoryName] = useState("JSE_T006_0");
  const handlePropChange = (newCategoryName, newValue) => {
    console.log("changed the prop to ", newValue);
    console.log("changed the prop to ", newCategoryName);
    setCategory(newValue);
    setCategoryName(newCategoryName);
  };

  return (
    <div className="SingleMap">
      <div className="SideMenu">
        <SideMenu onPropChange={handlePropChange} />
      </div>
      {/* <div className="Map">
        {" "} */}
      <Map filter={category} filterName={categoryName} />
      {/* </div> */}
    </div>
  );
};
export default SingleMap;
