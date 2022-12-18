"use strict";

module.exports = {
  printInfo: (req, res) => {
    const { age, name } = req.query;
    let output;

    if (Number(age) >= 18) {
      output = `${name} is eligible for applying a driving licencer.`;
    } else {
      output = `${name} is not eligible for applying a driving licence.`;
    }

    return res.status(200).send(output);
  },
};
