// dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import http from 'http';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import passport from 'passport';
// local import
import config from './config';
// mongoose models
import Exhibit from './models/exhibit';
import Gallery from './models/gallery';
import Message from './models/message';
import UserGallery from './models/user-gallery);
import UserWall from 'models/user-wall';
import User from 'models/user';
import Wall from 'models/wall';


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const server = http.Server(app);


app.listen((process.env.PORT || 8080), function() {
    console.log('server listening on port 8080');
})