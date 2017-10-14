// mongoose model for file document
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var MediaFileSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    chunkSize: {
        type: Number
    },
    uploadDate: {
        type: Date
    },
    md5: {
        type: String
    }
});
MediaFileSchema.plugin(timestamps);
var MediaFile = mongoose.model('MediaFile', MediaFileSchema);
module.exports = MediaFile;
