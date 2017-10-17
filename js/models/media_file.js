// mongoose model for file document
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var MediaFileSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    }
});
MediaFileSchema.plugin(timestamps);
var MediaFile = mongoose.model('MediaFile', MediaFileSchema);
module.exports = MediaFile;
