import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideMenu.css";
import censusMapping from "../MenuCategories";

const Sidebar = (props) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  const handleClickVariable = (category, variableName, variable) => {
    console.log("hi");
    console.log(category, variableName, variable);
    props.onPropChange(category, variableName, variable);
  };

  // Define categories and subcategories
  const [categoryStates, setCategoryStates] = useState({});
  const categories = Object.keys(censusMapping[props.year]).map((category, ind) => {
    return {
      id: ind,
      name: category,
      subcategories: Object.keys(censusMapping[props.year][category]),
    };
  });
  const toggleCategory = (categoryId) => {
    setCategoryStates((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="btn btn-primary toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? "»" : "«"}
      </button>
      {!isCollapsed && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand mb-0 h1" style={{ paddingLeft: "20px" }}>
            Select Variable
          </span>
        </nav>
      )}
      <div className="list-group">
        {categories.map((category) => (
          <div key={category.id}>
            <button
              className="list-group-item list-group-item-action category-item"
              onClick={() => toggleCategory(category.id)}
            >
              {category.name}
            </button>
            <div
              className={`list-group-submenu ${!categoryStates[category.id] ? "collapsed" : ""}`}
            >
              {category.subcategories.map((subcategory, index) => (
                <a
                  key={index}
                  href="#"
                  className="list-group-item list-group-item-action sub-item"
                  onClick={() =>
                    handleClickVariable(
                      category.name,
                      subcategory,
                      censusMapping[props.year][category.name][subcategory]
                    )
                  }
                >
                  {subcategory}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
