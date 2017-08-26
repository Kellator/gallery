// for user comments on exhibits - log user, timestamp, and text
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Message text']
    },
    creator: {
        type: String,
        required: [true, 'Username']
    },
    exhibit: {
        type: String,
        required: [true, 'exhibit_id in string form']
    }
});
CommentSchema.plugin(timestamps);
var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;