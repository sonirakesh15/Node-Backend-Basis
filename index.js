const http = require('http');         // Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). 
// const path = require('path');        // The Path module provides a way of working with directories and file paths.
const port = process.env.PORT || 7555; // decide PORT for NodeJs

const app = require('./server/init.js');  
const db = require('./config/db');

http.createServer(app).listen(port);