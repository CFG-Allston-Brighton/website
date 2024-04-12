/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const Census = require("./models/census");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const mongoose = require("mongoose");

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/tract", (req, res) => {
  const tract = new Census(req.body);
  tract.save();
});

router.get("/allGeoJSON", (req, res) => {
  Census.find({ name: req.query.name })
    .then((data) => {
      const output = {
        type: data[0].type,
        name: data[0].name,
        //crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        features: data[0].features,
      };
      res.send(output);
    })
    .catch((err) => res.status(500).send("Internal Server Error"));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
