const express = require('express');   // framework
const http = require('http');         // protocol 
const path = require('path');         // node module to resolve paths
const app = express();
const port = process.env.PORT || 7555;
const db = require('./config/db');

require('./routes/route-list')(app);   // where routes will be defined



http.createServer(app).listen(port);