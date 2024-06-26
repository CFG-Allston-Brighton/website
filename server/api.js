/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
const axios = require("axios");
const express = require("express");

// import models so we can interact with the database
const Census = require("./models/census");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const mongoose = require("mongoose");

//allow us to use process.ENV
require("dotenv").config();

const CENSUS_API_KEY = process.env.CENSUS_API_KEY;

const TRACT2010 = [
  "000100",
  "000201",
  "000202",
  "000301",
  "000302",
  "000401",
  "000402",
  "000502",
  "000503",
  "000504",
  "000601",
  "000602",
  "000701",
  "000703",
  "000704",
  "000802",
  "000803",
];

const TRACT2020 = [
  "000101",
  "000102",
  "000201",
  "000202",
  "000301",
  "000302",
  "000401",
  "000402",
  "000502",
  "000503",
  "000505",
  "000506",
  "000601",
  "000603",
  "000604",
  "000701",
  "000703",
  "000704",
  "000804",
  "000805",
  "000806",
  "000807",
];

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/tract", (req, res) => {
  const tract = new Census(req.body);
  tract.save();
});

router.get("/oldGeoJSON", async (req, res) => {
  const year = req.query.year;
  // if (year < 2010) {
  Census.find({ name: year })
    .then((data) => {
      const output = {
        type: data[0].type,
        name: data[0].name,
        features: data[0].features,
      };
      res.send(output);
    })
    .catch((err) => res.status(500).send("Internal Server Error"));
});

router.get("/newGeoJSON", async (req, res) => {
  const year = req.query.year;
  let censusTract = "";
  if (year === "2010") {
    censusTract = TRACT2010.toString();
  } else if (year === "2020") {
    censusTract = TRACT2020.toString();
  }
  // Base URL for the Census API
  const baseUrl = "https://api.census.gov/data";
  const apiKey = CENSUS_API_KEY;

  // Example dataset ID and year (you would replace these with the dataset and year you're interested in)
  const datasetId = "acs/acs5";
  const variables = req.query.vars; // "group(B01003)"
  const MA = "25";
  const SUFFOLK_COUNTY = "025";

  // https://api.census.gov/data/2010/acs/acs5?get=group(B01003)&for=tract:000301,000302&in=county:025&in=state:25&key=4cb22034cde4e2d7c6ec343a85b2c8309b6688bc
  // Construct the URL for the API request
  const apiUrl = `${baseUrl}/${year}/${datasetId}?get=${variables}&for=tract:${censusTract}&in=county:${SUFFOLK_COUNTY}&in=state:${MA}&key=${apiKey}`;

  // Make the API request
  fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse JSON response
      return response.json();
    })
    .then((data) => {
      const variable_name = data[0][0];
      const output = data.slice(1, data.length).map((ctract) => {
        return { tract: ctract[ctract.length - 1], data: { [variable_name]: ctract[0] } };
      });
      // console.log("d: ", data);
      // console.log("o:", output);
      // Extract variables and their values
      res.send(output);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
