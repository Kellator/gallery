var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var ConversationSchema = new mongoose.Schema({
    particpants: [{ type: Schema.Types.ObjectI, ref: 'User'}],
});

ConversationSchema.plugin(timestamps);
var Conversation = mongoose.model('Conversation', ConversationSchema);
module.exports = Conversation;