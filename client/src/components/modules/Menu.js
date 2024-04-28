import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Drawer,
  ListItemButton,
} from "@mui/material";
import censusMapping from "../CensusMapping.js";
import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";

const SideMenu = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCategory, setOpenCategory] = useState({});

  const categories = censusMapping[props.year];
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

  const handleClickCategory = (categoryName, category) => {
    console.log("category passed on is", category);
    props.onPropChange(categoryName, category);
  };

  return (
    <>
      <IconButton onClick={toggleMenu}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={toggleMenu}>
        <List>
          {categories.map((category, index) => (
            <div key={index}>
              <ListItemButton onClick={() => toggleCategory(category.name)}>
                <ListItemText primary={category.name} />
                {openCategory[category.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openCategory[category.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Object.keys(category.variables).map((subcategory, subIndex) => (
                    <ListItemButton
                      key={subIndex}
                      onClick={() =>
                        handleClickCategory(category.variables[subcategory], subcategory)
                      }
                    >
                      <ListItemText primary={category.variables[subcategory]} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;
