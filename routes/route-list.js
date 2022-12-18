"use strict";

module.exports = (app) => {
  // chevck direct woking of API
  app.get("/", (req, res) => {
    res.send({ msg: "working route", success: true });
  });

  //mount all routes
  app.use(`/api/`, require("./site-routes")());

  // If nothing else matches, return 404
  app.use("*", (req, res) => {
    return res.status(404).json({
      success: false,
      error: "Invalid Request",
    });
  });
};
