const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" })); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + "/"));

require("../routes/route-list")(app); // where routes will be defined
module.exports = app;
