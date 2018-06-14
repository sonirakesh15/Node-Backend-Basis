const express = require('express');
const router = express.Router();
const App = require('../../app/controllers/v1/app.js');
/** Routes */
router.get('/create', App.create);
router.get('/', App.get);
/** Routes End */
module.exports = router;