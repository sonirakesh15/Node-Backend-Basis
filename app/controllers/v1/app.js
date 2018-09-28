'use strict';
const mongoose = require('mongoose');
const User = require('../../models/user')
const Response = require('../../../config/response')

module.exports = {
    create: (req, res) => {
        let user = new User({
            name: 'Bipul',
            username: 'Bipu',
            password: 'Bipul'
        });

        // user.save();
        //function (err) {
        //     if (err) throw err;
        //     console.log('User saved successfully!');
        // });

        return Response.ok(res, user);
    },
    get: (req, res) => {
        return Response.ok(res);
    }
}