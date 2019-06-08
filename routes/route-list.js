'use strict';
const errors = require('./../errors/error-static.js');


module.exports = (app) => {
    app.get('/', (req, res) => { res.send({ msg: 'working route', success: true }); });

    app.use(`/api/${process.env.VERSION}/`, require('./site-routes')());

    // If nothing else ma tches, return 404
    app.use('*', (req, res) => {
        return res.status(404).json({
            success: false,
            error: errors.E_INVALID_REQ
        });
    });
}