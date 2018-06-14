const mongoose = require('mongoose');

module.exports = {
    test: function (req, res) {
        res.send('App 2 here tested');
        console.log('app 2 tested');
    },
    start: function (req, res) {
        res.send('App 2 here started');
        console.log('app 2 started');
    },
    testPost: function (req, res) {
        res.send('App 2 Post here tested');
        console.log('app 2 Post tested');
    },
}