const http = require('http');         // Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). 
require('dotenv').config();       // The Path module provides a way of working with directories and file paths.


const app = require('./server/init.js');

const config = require('./credential').get(process.env.NODE_ENV);
const db = require('./config/db');

require('./socket');

app.listen(process.env.PORT, function () {
    console.log('App listening on port 3000.');
});
console.log('App listening on port 7555')