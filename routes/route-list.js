'use strict';
const App = require('./site-routes/route-app1.js');
const App2 = require('./site-routes/route-app2.js');
const errors = require('./../errors/error-static.js');

module.exports = (app) => {
    app.get('/', (req, res) => { res.send('working route'); });
    app.use('/app', App);
    app.use('/app2', App2);

    // If nothing else matches, return 404
    app.use((req, res) => {
        return res.status(404).json({
            success: false,
            error: errors.E_INVALID_REQ
        });
    });
}