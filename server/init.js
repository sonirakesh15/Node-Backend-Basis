const express = require('express');
let app = express();

let helmet = require("helmet");
app.use(helmet({ frameguard: { action: 'deny' } }));

// load the cookie-parsing middleware
let cookieParser = require('cookie-parser')
app.use(cookieParser())
let compression = require("compression");
app.use(compression());

let bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })) // parse application/json
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/'));
app.enable('trust proxy');      //app.set('trust proxy', 1) // trust first proxy

require('../routes/route-list')(app);   // where routes will be defined
require('./configServer')(app);
module.exports = app;