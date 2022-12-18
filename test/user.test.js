const { printInfo } = require("../services/user.js");

test("Driving licence eligibility", () => {
  const name = "Joe",
    age = 20;
  expect(printInfo(name, age)).toBe(
    `${name} is eligible for applying a driving licence.`
  );
});

test("Driving licence not eligible", () => {
  const name = "Joe",
    age = 10;
  expect(printInfo(name, age)).toBe(
    `${name} is not eligible for applying a driving licence.`
  );
});

// test("Error on expecting wrong output", () => {
//   const name = "Joe",
//     age = 23;
//   expect(printInfo(name, age)).toBe(
//     `Wrong output expected as result it will throw error and fail this test`
//   );
// });
