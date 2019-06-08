'use strict';
const mongoose = require('mongoose');
const Response = require('../../../config/response')

module.exports = {
    test: (req, res) => {
        return Response.ok(res, 'App 2 tested');
    },
    start: (req, res) => {
        return Response.ok(res, 'App 2 here started');
    },
    testPost: (req, res) => {
        return  res.status(200).json({
            success: true,
            data: data,
            msg:msg
        });;
    },
}