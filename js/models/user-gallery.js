//user-gallery contains a users specific listing of walls
var mongoose = require('mongoose');

var userGallerySchema = new mongoose.Schema({
    _creator: {
        type: ObjectId,
        required: [true, 'Creator ID required for Gallery']
    },
    walls: {
        type: Array
    }
})