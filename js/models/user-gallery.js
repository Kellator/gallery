//user-gallery contains a users specific listing of walls
var mongoose = require('mongoose');

var userGallerySchema = new mongoose.Schema({
    walls: {
        type: Array
    }
})