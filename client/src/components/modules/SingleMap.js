import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import YearSlider from "./Slider.js";

import "./SingleMap.css";
const SingleMap = () => {
  const [category, setCategory] = useState("JSE_T006_0");
  const [year, setYear] = useState(1980);
  const [categoryName, setCategoryName] = useState("Total Population");

  const handlePropChange = (newCategoryName, newValue) => {
    console.log("changed the prop to ", newValue);
    console.log("changed the prop to ", newCategoryName);
    setCategory(newValue);
    setCategoryName(newCategoryName);
  };

  const handleYearChange = (newYear) => {
    console.log("changed the year to ", newYear);
    setYear(newYear);
    // only for testing TODO: use dict in future
    if (newYear === 1990 || newYear === 2000) {
      setCategory("jSE_T008_1");
      setCategoryName("Number of Children");
    } else {
      setCategory("JSE_T006_1");
    }
  };

  return (
    <div className="SingleMap">
      <div className="Filters">
        <div className="SideMenu">
          <SideMenu onPropChange={handlePropChange} />
        </div>
        <YearSlider onYearChange={handleYearChange} />
      </div>
      <Map filter={category} filterName={categoryName} year={year} />
    </div>
  );
};
export default SingleMap;
