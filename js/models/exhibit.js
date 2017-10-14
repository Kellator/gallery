// mongoose model for exhibit document
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var ExhibitSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image:  {
        type: String
        // required: [true, 'Image required for Exhibit']
    },
    description: {
        type: String,
        required: [true, 'Brief description of posting and what artist wants to accomplish with collaboration.']
    },
    status: {
        type: Boolean,
        // required: [true, 'Piece status: True = open to collaboration.  False = Closed, for viewing and comment only.']
    },
    creator: {
        type: String,
        required: [true, 'Username']
    },
    collaborators: {
        type: Array
    },
    categories: {
        type: Array
    },
    //comments as own collection that is referenced here - allows for moderation of comments
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref:'Comment'}] 

});
ExhibitSchema.plugin(timestamps);
var Exhibit = mongoose.model('Exhibit', ExhibitSchema);
module.exports = Exhibit;