// dependencies
//  ES6 IMPORT NOT CURRENTLY WORKING
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import http from 'http';
// import bcrypt from 'bcryptjs';
// import session from 'express-session';
// import passport from 'passport';
//  LOCAL IMPORT
// import config from './config';
// mongoose models
// import Exhibit from './models/exhibit';
// import Gallery from './models/gallery';
// import Message from './models/message';
// import UserGallery from './models/user-gallery';
// import UserWall from 'models/user-wall';
// import User from 'models/user';
// import Wall from 'models/wall';
require("babel-register");
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cors = require('cors');

// local import
var config = require('./config');
// mongoose models
var Exhibit = require('./js/models/exhibit');
var Gallery = require('./js/models/gallery');
var Message = require('./js/models/message');
var UserGallery = require('./js/models/user-gallery');
var UserWall = require('./js/models/user-wall');
var User = require('./js/models/user');
var Wall = require('./js/models/wall');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

const server = http.Server(app);

//coordinates the connection to the database, and the running on the HTTP server
const runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, {useMongoClient: true}, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:', + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};
//makes file both executable script and a module
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}
exports.app = app;
exports.runServer = runServer;

passport.use(new LocalStrategy(
    function(username, email, password, done) {
        console.log('local strat pw ' + password);
        User.findByEmail(email, function(err, user) {
            console.log('pass strat find user: ' + username);
            console.log('pass strat find email: ' +user.email);
            console.log('pass strat find pass: ' +user.password);
            if (err) {
                console.log('local strat error : ' + err);
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            user.validatePassword(password, function(err, isValid) {
                if(err || !isValid) { return done(null, false, {
                    message: 'Incorrect Password.'
                });
            }
                return done(null, user);
            });
        });
    }
));
//authenticated session persistance
passport.serializeUser(function(user, callback) {
    console.log("serialize");
    callback(null, user.id);
});
passport.deserializeUser(function(id, callback) {
    console.log("deserialize");
    User.findById(id, function(err, user) {
        if (err) {
            return callback(err);
        }
        callback(null, user);
    });
});

// passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

app.use(require('express-session')({
    secret: 'pickle relish',
    resave: false,
    saveUninitialized: false
}));

app.get('/', function(req, res) {
    return res.sendStatus(200);
});
//log in authentication request
app.post('/login', passport.authenticate('local'), function(req, res) {
    console.log('/login post log: ' + req);
    res.status(200).json({
        status: 'Login successful!'
    });
});
//log out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
//userName & password endpoints
//creating a username & password 
app.post('/register', function(req, res) {
    console.log('main post /register console log: ' + req)
    if (!req.body) {
        return res.status(400).json({
            message: "No Request Body"
        });
    }
    if (!('username' in req.body)) {
        return res.status(422).json({
            message: "Missing Field: username"
        });
    }
    if (!('email' in req.body)) {
        return res.status(422).json({
            message: "Missing Field: email"
        });
    }
    var username = req.body.username;
    console.log(username);
    if (typeof username !== 'string') {
        return res.status(422).json({
            message: "Incorrect Field Type: username"
        });
    }
    username = username.trim();
    if (username === '') {
        return res.status(422).json({
            message: "Incorrect Field Length: username"
        });
    }
    var email = req.body.email;
    console.log(email);
    if (typeof email !== 'string') {
        return res.status(422).json({
            message: "Incorrect Field Type: email'"
        });
    }
    email = email.trim();
    if (email === '') {
        return res.status(422).json({
            message: "Incorrect Field Length: email"
        });
    }
    var password = req.body.password;
    if (typeof password !== 'string') {
        return res.status(422).json({
            message: "Incorrect Field Type: password"
        });
    }
    password = password.trim();
    if (password === '') {
        return res.status(422).json({
            message: "Incorrect Field Length: password"
        });
    }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Internal Server Error"
                });
            }
            var user = new User({
                username: username,
                email: email,
                password: hash
            });
            console.log(user);
            user.save(function(err) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "Internal Server Error"
                    });
                }
                return res.status(201).json({});
            });
        });
    });
});

app.listen((process.env.PORT || 8081), function() {
    console.log('server listening on port 8081');
});