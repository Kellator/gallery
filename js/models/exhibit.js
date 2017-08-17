//schema for exhibit item - includes title, image, src link, search categories, comments.

var mongoose = require('mongoose');

var exhibitSchema = new mongoose.Schema({
    title: {
        type: String
    },
    username: {
        type: String,
        required: [true, 'Creator ID required for Exhibit']
    },
    image:  {
        type: String,
        required: [true, 'Image required for Exhibit']
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