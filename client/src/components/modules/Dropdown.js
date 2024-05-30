import React, { useState } from "react";
import "./SideMenu.css";

const categories = [
  {
    name: "Category 1",
    subcategories: ["Subcategory 1.1", "Subcategory 1.2", "Subcategory 1.3"],
  },
  {
    name: "Category 2",
    subcategories: ["Subcategory 2.1", "Subcategory 2.2", "Subcategory 2.3"],
  },
  {
    name: "Category 3",
    subcategories: ["Subcategory 3.1", "Subcategory 3.2", "Subcategory 3.3"],
  },
];

const CustomDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  return (
    <div className="custom-dropdown">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        value={selectedSubcategory}
        onChange={handleSubcategoryChange}
        disabled={!selectedCategory}
      >
        <option value="">Select Subcategory</option>
        {selectedCategory &&
          categories
            .find((category) => category.name === selectedCategory)
            .subcategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
