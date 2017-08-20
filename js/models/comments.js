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
        required: [true, 'Creator ID']
    },
    exhibit: {
        type: mongoose.Schema.Types.ObjectId, ref:'Exhibit'
    }
});
CommentSchema.plugin(timestamps);
var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;