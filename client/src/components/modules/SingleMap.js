import React, { useState } from "react";
import Map from "./Map.js";
import SideMenu from "./Menu.js";
import YearSlider from "./Slider.js";
import censusMapping from "../CensusMapping.js";
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

  // Isha: CHANGE THIS
  const handleYearChange = (newYear) => {
    console.log("changed the year to ", newYear);
    console.log("mapping is ", censusMapping[newYear]["Total Population"]);
    // if we want to keep the same demographic feature:
    // let newVariable = censusMapping[newYear][category][variableName];
    const newVariable = censusMapping[newYear]["Total Population"]["Total Population"];
    setVariable(newVariable);
    setVariableName("Total Population");
    setCategory("Total Population");
    setYear(newYear);
  };

  return (
    <div className="SingleMap">
      <div className="Filters">
        <div className="SideMenu">
          <SideMenu
            year={year}
            onPropChange={handlePropChange}
            handleCheck={props.handleCheckBox}
          />
        </div>
        <YearSlider onYearChange={handleYearChange} />
      </div>
      <Map year={year} filter={variable} filterName={variableName} />
    </div>
  );
};
export default SingleMap;
