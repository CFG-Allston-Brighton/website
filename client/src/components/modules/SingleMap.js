import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import YearSlider from "./Slider.js";

import "./SingleMap.css";
const SingleMap = (props) => {
  const [category, setCategory] = useState("jSE_T001_0");
  const [year, setYear] = useState(1980);
  const [categoryName, setCategoryName] = useState("Total Population");

  const handlePropChange = (newCategoryName, newValue) => {
    {
      console.log("year is currently inside of singlemap", props.year);
    }
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
          <SideMenu year={props.year} onPropChange={handlePropChange} />
        </div>
        <YearSlider onYearChange={handleYearChange} />
      </div>
      <Map year={props.year} filter={category} filterName={categoryName} />
    </div>
  );
};
export default SingleMap;
