const express = require('express');   // framework
const http = require('http');         // Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). 
const path = require('path');         // The Path module provides a way of working with directories and file paths.
const app = express();
/* 
The bodyParser object exposes various factories to create middlewares. 
All middlewares will populate the req.body property with the parsed 
body when the Content-Type request header matches the type option, 
or an empty object ({}) if there was no body to parse, the Content-Type
 was not matched, or an error occurred. */
const bodyParser = require('body-parser'); 

const port = process.env.PORT || 7555; // decide PORT for NodeJs
const db = require('./config/db');

//require('./routes/route-conf')(app);   // where routes will be defined
require('./routes/route-list')(app);   // where routes will be defined
//
app.use(express.static(__dirname + '/'));

// app.enable('trust proxy');
app.disable('trust proxy');
app.disable('x-powered-by'); // remove express(server platform) from browser


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(function(req, res, next) {
//     res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
//     return next();
// });


// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '50mb' })); // set limit for data

http.createServer(app).listen(port);