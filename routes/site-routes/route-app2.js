'use strict';
const express = require('express');
let router = express.Router();
const App2 = require('../../app/controllers/v1/app2.js');

/** Routes */
router.get('/test', App2.test);
router.post('/_info', App2.testPost);
router.get('/_info', App2.start);
/** Routes End */
module.exports = router;