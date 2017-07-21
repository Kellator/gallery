// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('monogoose');
var http = require('http');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var passport = require('passport');
// local import
var config = require('./config');
// mongoose models
var Exhibit = require('./models/exhibit');
var Gallery = require('./models/gallery');
var Message = require('./models/message');
var UserGallery = require('./models/user-gallery');
var UserWall = require('models/user-wall');
var User = require('models/user');
var Wall = require('models/wall');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

var server = http.Server(app);


app.listen(process.env.PORT || 8080)