// grab the things we need
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
},
    {
        timestamps: true       
    }
);

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);
module.exports = User;
