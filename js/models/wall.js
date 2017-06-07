//wall contains the exhibits - name of the wall, exhibits contained on the wall, search categories applicable to wall
var mongoose = require('mongoose');

var wallSchema = new mongoose.Schema({
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
var Wall = mongoose.model('Wall', wallSchema);
module.exports = Wall;