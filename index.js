const http = require("http"); // Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
require("dotenv").config(); // The Path module provides a way of working with directories and file paths.

const app = require("./server/init.js");

app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000.");
});
