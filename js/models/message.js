
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var MessageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Channel',
        required: true
    },
    body: {
        type: String,
        required: [true, 'Message text']
    },
    author: {
        type: String,
        ref: 'User'
    },
    exhibit: {
        type: mongoose.Schema.Types.ObjectId, ref:'Exhibit'
    }
});
MessageSchema.plugin(timestamps);
var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;