var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var ChannelSchema = new mongoose.Schema({
    particpants: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    channel: { type: Schema.Types.ObjectId, ref: 'Exhibit'},
    display_name: String,
    private: Boolean
});

ChannelSchema.plugin(timestamps);
var Channel = mongoose.model('Channel', ChannelSchema);
module.exports = Channel;