// mongoose model for exhibit document
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var exhibitSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image:  {
        type: String,
        required: [true, 'Image required for Exhibit']
    },
    description: {
        type: String,
        required: [true, 'Brief description of posting and what artist wants to accomplish with collaboration.']
    },
    exhibitType: {
        type: String,
        required: [true, 'Piece type: Art, Music, Text, Game']
    },
    status: {
        type: String,
        required: [true, 'Piece status: Open for collaboration or closed and for viewing only.']
    },
    creator: {
        type: String,
        required: [true, 'Creator ID required for Exhibit']
    },
    collaborators: {
        type: Array
    },
    siteLink: {
        type: String,
        required: [true, 'Source Link required for Exhibit']
    },
    categories: {
        type: Array
    },
    //comments as own collection that is referenced here - allows for moderation of comments
    comments: {   
        type: Array    
    }
});

var Exhibit = mongoose.model('Exhibit', exhibitSchema);
module.exports = Exhibit;