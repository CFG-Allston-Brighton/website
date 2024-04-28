import React from "react";
import Slider from "@mui/material/Slider";

const YearSlider = (props) => {
  const [value, setValue] = React.useState(1980);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onYearChange(newValue);
  };

  return (
    <div style={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={1980}
        max={2000}
      />
    </div>
  );
};

export default YearSlider;
