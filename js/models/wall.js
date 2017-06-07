//Wall contains all exhibits in the gallery app in the category 
var mongoose = require('mongoose');

var WallSchema = new mongoose.Schema({
    title: {
        type: String
    },
    exhibits: {
        type: Array
    },
    categories: {
        type: Array
    }
});
var Wall = mongoose.model('Wall', WallSchema);
module.exports = Wall;