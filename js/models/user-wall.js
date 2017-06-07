//UserWall contains the exhibits - name of the wall, exhibits contained on the wall, search categories applicable to wall
var mongoose = require('mongoose');

var userWallSchema = new mongoose.Schema({
    _creator: {
        type: ObjectId,
        required: [true, 'Creator ID required for Wall']
    },
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
var UserWall = mongoose.model('Wall', userWallSchema);
module.exports = UserWall;