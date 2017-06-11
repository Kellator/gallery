//all walls in gallery app
var mongoose = require('mongoose');

var gallerySchema = new mongoose.Schema({
    walls: Array
});

var Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;