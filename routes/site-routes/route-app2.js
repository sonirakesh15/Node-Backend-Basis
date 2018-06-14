const express = require('express');
const app = express.Router();
const App2 = require('../../app/controllers/v1/app2.js');
/** Routes */
app.get('/test', App2.test);
app.get('/', App2.start);
app.post('/test', App2.testPost);
/** Routes End */
module.exports = app;