import React, { useState } from "react";
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
import censusMapping from "../CensusMapping.js";
import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";

const SideMenu = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCategory, setOpenCategory] = useState({});
  const [checked, setChecked] = useState(() => {
    // Use localStorage or sessionStorage to persist the checkbox state
    const storedChecked = localStorage.getItem("checkboxState");
    return storedChecked ? JSON.parse(storedChecked) : false;
  });

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    localStorage.setItem("checkboxState", JSON.stringify(newChecked));
    props.handleCheck(newChecked);
  };

  const varMapping = censusMapping[props.year];
  //console.log("mapping is ", mapping);

  // const populationCategories = [
  //   ["Population", "JSE_T006_0"],
  //   ["Number of Children", "JSE_T006_1"],
  // ];

  const toggleCategory = (category) => {
    setOpenCategory((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const toggleMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClickCategory = (category, variableName, variable) => {
    props.onPropChange(category, variableName, variable);
  };

  return (
    <>
      <IconButton onClick={toggleMenu}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={toggleMenu}>
        <List>
          {Object.keys(varMapping).map((category, index) => (
            <div key={index}>
              <ListItemButton onClick={() => toggleCategory(category)}>
                <ListItemText primary={category} />
                {openCategory[category] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openCategory[category]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Object.keys(varMapping[category]).map((subcategory, subIndex) => (
                    <ListItemButton
                      key={subIndex}
                      onClick={() =>
                        handleClickCategory(
                          category,
                          subcategory,
                          varMapping[category][subcategory]
                        )
                      }
                    >
                      <ListItemText primary={subcategory} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
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
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;
