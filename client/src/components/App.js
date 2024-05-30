import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import NavBar from "./pages/NavBar.js";
// import Map from "./pages/Map.js";

import "../utilities.css";

import { get, post } from "../utilities";
import Maps from "./pages/Maps.js";
import History from "./pages/History.js";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Allston Brighton CDC Data Visualization</h1>} />
        <Route path="/Map/" element={<Maps />} />
        <Route path="/History/" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
