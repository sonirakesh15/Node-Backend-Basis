"use strict";
const userService = require("../../services/user.js");

module.exports = {
  printInfo: (req, res) => {
    const { age, name } = req.query;

    const result = userService.printInfo(name, age);

    return res.status(200).send(result);
  },
};
