const express = require("express");
const router = express.Router();
const getCountries = require("../../controllers/getCountries");
const getCountryId = require("../../controllers/getCountryId");
const getCountriesByName = require("../../controllers/getCountriesByName");
const createActivities = require("../../controllers/createActivities");
const getActivities=require("../../controllers/getActivities");

router.get("/countries",getCountries);
router.get("/countries/:Id",getCountryId);
router.get("/countriesByName", getCountriesByName);
router.get("/activities", getActivities);
router.post("/activities", createActivities);

module.exports = router;
