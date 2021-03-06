'use strict';
// dependencies
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
var cookieParser = require('cookie-parser');

const path = require('path');
// local import
var config = require('./config');
// mongoose models
var Exhibit = require('./js/models/exhibit');
var Gallery = require('./js/models/gallery');
var Comment = require('./js/models/comment.js');
var UserGallery = require('./js/models/user-gallery');
var User = require('./js/models/user');

var routes = require('./routes/routes');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session(config.SESSION_KEY));
app.use(cors());
app.use('/', routes);
// console.log(routes);
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
    function(username, password, done) {
        User.findByUsername(username, function(err, user) {
            if (err) {
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

app.get('/', function(req, res) {
    return res.sendStatus(200);
});
// log in authentication request
app.post('/login', passport.authenticate('local'),
    function(req, res) {
        let username = res.req.user.username;
        let email = res.req.user.email;
        let id = res.req.user._id;
        res.status(200).json({
            status: 'Login successful!',
            username: username,
            id: id,
            email: email 
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
            user.save(function(err) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "Internal Server Error"
                    });
                }
                console.log(user.updatedAt);
                return res.status(201).json({
                    status: 'Login successful!',
                    username: user.username,
                    email: user.email,
                    password: password 
                });
            });
        });
    });
});
//log out of gallery
app.post('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
// var channel_test = {
//     title: 'main',
//     creator: 'testy'
// }
// Channel.create(channel_test, function(err, channel) {
//     console.log("test channel go")
//     if(err || !channel_test) {
//         console.error('could not create channel');
//         return res.status(500).json({
//             message: 'Internal Server Error'
//         });
//     };
//     // let display_name = channel_test.title;
//     // let creator = channel_test.creator;
//     // res.status(201).json(channel_test);
// });