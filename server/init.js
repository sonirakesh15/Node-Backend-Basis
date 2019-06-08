const express = require('express');
let app = express();
require('dotenv').config();
require('../routes/route-list')(app);   // where routes will be defined
let cookieParser = require('cookie-parser')

let compression = require("compression");
let bodyParser = require('body-parser');
let helmet = require("helmet");

// load the cookie-parsing middleware

app.use(cookieParser())
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + '/'));

app.use(bodyParser.json({ limit: '50mb' })) // parse application/json
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

app.enable('trust proxy');      //app.set('trust proxy', 1) // trust first proxy


// Use middleware to set the default Content-Type
app.use((request, response, next) => {
    response.setHeader('X-Powered-By', 'Ausm App');
    next();
});



module.exports = app;

console.log('test')