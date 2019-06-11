'use strict';
let fs = require('fs');
const express = require('express');
let app = express();
require('../../config/response-check')


let routingLinks = {
    'route-app1.js': '_1',
    'route-app2.js': '_2'
}

module.exports = () => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file == "index.js") return;
        app.use(`/${routingLinks[file]}`, require('./' + file));
    });
    return app;
};