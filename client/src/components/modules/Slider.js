import React from "react";
import Slider from "@mui/material/Slider";

const YearSlider = (props) => {
  const [value, setValue] = React.useState(2000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onYearChange(newValue);
  };

  return (
    <div style={{ width: 300, margin: "0 32px" }}>
      <Slider
        value={value}
        onChangeCommitted={handleChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks={[
          { value: 1980, label: "1980" },
          { value: 1990 },
          { value: 2000 },
          { value: 2010 },
          { value: 2020, label: "2020" },
        ]}
        min={1980}
        max={2020}
        style={{
          zIndex: 5555,
        }}
      />
    </div>
  );
};
export default YearSlider;
