"use strict";

module.exports = {
  printInfo: (name, age) => {
    let output;
    if (Number(age) >= 18) {
      output = `${name} is eligible for applying a driving licence.`;
    } else {
      output = `${name} is not eligible for applying a driving licence.`;
    }

    return output;
  },
};
