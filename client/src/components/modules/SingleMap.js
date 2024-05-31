import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import YearSlider from "./Slider.js";
import censusMapping from "../MenuCategories.js";
import "./SingleMap.css";
const SingleMap = (props) => {
  const [year, setYear] = useState(1990);
  const [category, setCategory] = useState("Total Population");
  const [variableName, setVariableName] = useState("Total Population");
  const [variable, setVariable] = useState(censusMapping[year][category][variableName]);

  const handlePropChange = (newCategory, newVariableName, newVariable) => {
    setCategory(newCategory);
    setVariableName(newVariableName);
    setVariable(newVariable);
  };

  // TODO: first try to find whether demmographic exists
  const handleYearChange = (newYear) => {
    console.log("changed the year to ", newYear, category, variableName);
    console.log("mapping is ", censusMapping[newYear][category]);
    let newCategory = censusMapping[newYear][category];
    let newVariable = newCategory === undefined ? undefined : newCategory[variableName];
    if (newVariable === undefined) {
      newVariable = censusMapping[newYear]["Total Population"]["Total Population"];
      setVariableName("Total Population");
      setCategory("Total Population");
    }
    // if we want to keep the same demographic feature:
    //newVariable = censusMapping[newYear][category][variableName];
    // console.log("variable is", newVariable);
    setVariable(newVariable);
    setYear(newYear);
  };

  return (
    <div className={"SingleMap " + props.className}>
      <div className="Filters">
        <div className="SideMenu">
          <SideMenu year={year} onPropChange={handlePropChange} />
        </div>
        {/* <p className="Label">Year </p> */}
        <YearSlider onYearChange={handleYearChange} />
      </div>
      <Map year={year} filter={variable} filterName={variableName} category={category} />
    </div>
  );
};
export default SingleMap;
