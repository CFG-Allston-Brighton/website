import React, { useState } from "react";
import { useEffect } from "react";
import SingleMap from "../modules/SingleMap.js";
import "./Maps.css";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Drawer,
  ListItemButton,
  Checkbox,
} from "@mui/material";
const Maps = (props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {}, []);

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <div className="Maps-page">
      <div>
        <ListItemButton>
          <Checkbox
            edge="start"
            checked={checked}
            onChange={handleCheckboxChange}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary="Show two Maps" />
        </ListItemButton>
      </div>
      {checked ? (
        <div className="Maps">
          <SingleMap
            key={"left"}
            handleCheckBox={handleCheckboxChange}
            className="Side-by-Side-Maps"
          />
          <SingleMap
            key={"right"}
            handleCheckBox={handleCheckboxChange}
            className="Side-by-Side-Maps"
          />
        </div>
      ) : (
        <SingleMap key={"single"} handleCheckBox={handleCheckboxChange} className="Single-Map" />
      )}
    </div>
  );
};
export default Maps;
