import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import "./SingleMap.css";
const SingleMap = (props) => {
  const [category, setCategory] = useState("jSE_T001_0");
  const [categoryName, setCategoryName] = useState("jSE_T001_0");
  const handlePropChange = (newCategoryName, newValue) => {
    {
      console.log("year is currently inside of singlemap", props.year);
    }
    setCategory(newValue);
    setCategoryName(newCategoryName);
  };

  return (
    <div className="SingleMap">
      <div className="SideMenu">
        <SideMenu year={props.year} onPropChange={handlePropChange} />
      </div>
      <Map year={props.year} filter={category} filterName={categoryName} />
    </div>
  );
};
export default SingleMap;
