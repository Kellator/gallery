// mongoose model for user document
//bcrypt for password hashing

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var timestamps = require('mongoose-timestamp');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
        // required: [true, 'Avatar image for user. Default assigned in none chosen.']
    },
    //use population to link to documents in other collection ?return list of exhibits with id as creator?
    galleries: {
        originals: [{ type: mongoose.Schema.Types.ObjectId, ref:'Exhibit'}],
        collaborations: [{ type: mongoose.Schema.Types.ObjectId, ref:'Exhibit'}]
    }
});
    // galleries: [{ type: mongoose.Schema.Types.ObjectId, ref:'Wall'}],
    // });
UserSchema.plugin(timestamps);
UserSchema.statics.findByUsername = function(username, callback) {
    return this.findOne({username: username}, function(err, user) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, user);
    });
};
// UserSchema.statics.findByEmail = function(email, callback) {
//     return this.findOne({email: email}, function(err, user) {
//         console.log(user);
//         if (err) {
//             callback(err);
//             return;
//         }
//         callback(null, user);
//     });
// };
UserSchema.methods.validatePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isValid) {
        if(err) {
            console.log('err in comparing');
            callback(err);
            return;
        }
        callback(null, isValid);
    });
};
var User = mongoose.model('User', UserSchema);

module.exports = User;