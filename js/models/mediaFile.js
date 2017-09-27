// mongoose model for media files
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var mediaFileSchema = new mongoose.Schema({
    originalName: {
        type: String
    },
    creator: {
        type: String,
        required: [true, 'Username']
    },
    collaborators: {
        type: String
    }
});
var MediaFile = mongoose.model('MediaFile', mediaFileSchema);
module.exports = MediaFile;
