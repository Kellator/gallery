//user-gallery contains a users specific listing of walls
var mongoose = require('mongoose');

var userGallerySchema = new mongoose.Schema({
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Creator ID required for Gallery']
    },
    walls: {
        type: Array
    }
});
var UserGallery = mongoose.model('UserGallery', userGallerySchema);
module.exports = UserGallery;