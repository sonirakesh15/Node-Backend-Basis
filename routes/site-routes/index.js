'use strict';
let fs = require('fs');
const express = require('express');
let app = express();
const errors = require('../../errors/error-static.js');
require('../../config/response-check')


let routingLinks = {
    'route-app1.js': '_1',
    'route-app2.js': '_2'
}

module.exports = () => {
    app.use(checkValidtity);
    fs.readdirSync(__dirname).forEach((file) => {
        if (file == "index.js") return;
        app.use(`/${routingLinks[file]}`, require('./' + file));
    });
    return app;
};

function checkValidtity(req, res, next) {
    if (typeof req.path !== 'string')
        return returnError(res, 404, 'E_INVALID_PATH_STRING')

    return next();
}

function returnError(responseObject, errorCode, errorString) {
    return responseObject.status(errorCode).json({
        success: false,
        error: errors[errorString]
    });
}