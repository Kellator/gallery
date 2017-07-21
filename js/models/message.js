//all walls in gallery app
var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;