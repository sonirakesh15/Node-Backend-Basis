'use strict';
const express = require('express');
let router = express.Router();
const App = require('../../app/controllers/v1/app.js');


/** Routes */
router.get('/create', App.create);

/** Routes End */

module.exports = router;