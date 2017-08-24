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
var Message = require('./js/models/message');
var UserGallery = require('./js/models/user-gallery');
var UserWall = require('./js/models/user-wall');
var User = require('./js/models/user');
var Wall = require('./js/models/wall');
var routes = require('./routes/routes');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat' }));
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
                return res.status(201).json({});
            });
        });
    });
});
// let mockExhibit1 = {
//     title: 'Replacement for the Stars',
//     username: 'testy',
//     image:  'http://orig00.deviantart.net/c31e/f/2016/089/d/c/replacement_for_the_stars_by_yuumei-d9x282e.jpg',
//     location: 'http://yuumei.deviantart.com/art/Replacement-for-the-Stars-599726678',
//     categories: ['illustration', 'manga', 'digital', 'landscapes', 'scenery', 'people', 'portrait'],
//     comments: [
//         {'username':'username',
//         'date': 'date',
//         'comments text': 'comments text'},
//         {'username':'username2',
//         'date': 'date2',
//         'comments text': 'comments text2'}
//     ]
// };
// var mockExhibit2 = {
//     title: 'Death Valley',
//     username: 'testy',
//     image:  'https://s-media-cache-ak0.pinimg.com/564x/82/37/ee/8237ee9fff1bd5b205cc0b3cc23c253b.jpg',
//     location: 'http://dabana.deviantart.com/art/Death-Valley-535687540',
//     categories: ['illustration', 'painting', 'digital', 'landscapes', 'scenery'],
//     comments: [
//         {'username':'username',
//         'date': 'date',
//         'comments text': 'comments text'},
//         {'username':'username2',
//         'date': 'date2',
//         'comments text': 'comments text2'}
//     ]
// };
// var mockExhibit3 = {
//     title: 'Fly by Night',
//     username: 'test4',
//     image:  'http://dspncdn.com/a1/media/692x/78/c8/a1/78c8a13c4dd878d82d22940b48512315.jpg',
//     location: 'http://designspiration.net/image/4609558023629/',
//     categories: ['illustration', 'painting', 'digital', 'whimsical', 'people', 'portrait'],
    // comments: [
    //     {'username':'username',
    //     'date': 'date',
    //     'comments text': 'comments text'},
    //     {'username':'username2',
    //     'date': 'date2',
    //     'comments text': 'comments text2'}
    // ]
// };

// var mockExhibit4 = {
//     title: 'Replacement for the Stars',
//     image: 'http://orig00.deviantart.net/c31e/f/2016/089/d/c/replacement_for_the_stars_by_yuumei-d9x282e.jpg',
//     description: 'Boy in red from manga called Knite.  For viewing only. Piece completed.',
//     exhibitType: 'Art',
//     status: 'Viewing Only',
//     creator: "testy",
//     collaborators: ["5988eb35c616a7950825a6fd"],
//     location: 'http://yuumei.deviantart.com/art/Replacement-for-the-Stars-599726678',
//     categories: ['illustration', 'manga', 'digital', 'landscapes', 'scenery', 'people', 'portrait'],
//     //comments as own collection that is referenced here - allows for moderation of comments
//     comments: [
//         {'username':'username',
//         'date': 'date',
//         'commentsText': 'comments text'},
//         {'username':'username2',
//         'date': 'date2',
//         'commentsText': 'comments text2'}
//     ]
// };
// var mockExhibit5 = {
//         title: 'Fly by Night',
//         image: 'http://dspncdn.com/a1/media/692x/78/c8/a1/78c8a13c4dd878d82d22940b48512315.jpg',
//         description: 'Flysing ship in the sky flanked by angler fish.  Dreamy landscape.',
//         exhibitType: 'Art',
//         status: 'Viewing Only',
//         creator: "test4",
//         collaborators: ["testy", "test4"],
//         location: 'http://designspiration.net/image/4609558023629/',
//         categories: ['illustration', 'painting', 'digital', 'whimsical', 'people', 'portrait'],
//         //comments as own collection that is referenced here - allows for moderation of comments
//         comments: [
//             {'username':'username',
//             'date': 'date',
//             'commentsText': 'comments text'},
//             {'username':'username2',
//             'date': 'date2',
//             'commentsText': 'comments text2'}
//         ]
//     };
// let mockExhibit = mockExhibit4
// Exhibit.create(mockExhibit, function(err, exhibit) {
//     let title = mockExhibit.title;
//     let creator = mockExhibit.creator;
//     let image = mockExhibit.image;
//     let location = mockExhibit.location;
//     let categories = mockExhibit.categories;
//     let collaborators = mockExhibit.collaborators;
//     let exhibitType = mockExhibit.exhibitType;
//     let description = mockExhibit.description;
//     let status = mockExhibit.status;
//     let comments = mockExhibit.comments;
//     if (err || !exhibit) {
//         console.error("Could not create exhibit");
//         console.log(err);
//         // return res.status(500).json({
//         //     message: 'Internal Server Error'
//         // });
//     }
//     console.log("Created Exhibit ");
//     console.log(exhibit);
// });