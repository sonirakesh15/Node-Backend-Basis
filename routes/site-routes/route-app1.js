"use strict";
const express = require("express");
let router = express.Router();
const App = require("../../app/controllers/user.js");

/** Routes */
router.get("/print", App.printInfo);

/** Routes End */

module.exports = router;
