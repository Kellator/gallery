// imports multiple route files into a singular file to export to server.js
'use strict'
var gallery_routes = require('./gallery_routes');
var user_routes = require('./user_routes');
var express = require('express');
var router = express.Router();

router.use('/gallery', gallery_routes);
router.use('/user', user_routes);
module.exports = router;


