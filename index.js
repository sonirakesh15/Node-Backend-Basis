const http = require("http"); // Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

const app = require("./server/init.js");

app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000.");
});
