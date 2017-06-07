//schema for exhibit item - includes title, image, src link, search categories, comments

var mongoose = require('mongoose');

var exhibitSchema = new mongoose.Schema({
    title: {
        type: String
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
    //comments are objects - stores as username : comment
    comments: {
        type: Mixed
    }
});

var Exhibit = mongoose.model('Exhibit', exhibitSchema);
module.exports = Exhibit;