//all walls in gallery app
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var MessageSchema = new mongoose.Schema({
    message: {
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
MessageSchema.plugin(timestamps);
var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;