import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import YearSlider from "./Slider.js";
import censusMapping from "../CensusMapping.js";
import "./SingleMap.css";
const SingleMap = (props) => {
  // Isha: CHANGE THIS
  const [category, setCategory] = useState("jSE_T001_0");
  const [year, setYear] = useState(1990);
  const [categoryName, setCategoryName] = useState("Total Population");

  const handlePropChange = (newCategoryName, newValue) => {
    {
      console.log("year is currently inside of singlemap", year);
    }
    setCategory(newValue);
    setCategoryName(newCategoryName);
  };

  // Isha: CHANGE THIS
  const handleYearChange = (newYear) => {
    console.log("changed the year to ", newYear);
    console.log("category: ", category, categoryName);
    console.log(censusMapping[newYear][2].variables);
    let newCategory = censusMapping[newYear].filter((value) => {
      const ft = Object.entries(value.variables).filter(([key, val]) => {
        console.log("name: ", val);
        return val === categoryName;
      });
      console.log("filtered: ", ft);
      return ft.length !== 0;
    });

    if (newCategory === undefined) {
      newCategory = censusMapping[newYear][0];
    }
    console.log("cat", newCategory);
    setYear(newYear);
    // setCategory(newCategory.variables.filter((val) => val === categoryName)[0]);
    // setCategoryName(newCategoryName);
  };

  return (
    <div className="SingleMap">
      <div className="Filters">
        <div className="SideMenu">
          <SideMenu year={year} onPropChange={handlePropChange} />
        </div>
        <YearSlider onYearChange={handleYearChange} />
      </div>
      <Map year={year} filter={category} filterName={categoryName} />
    </div>
  );
};
export default SingleMap;
