//identifies user via unique email address
//stores email address, hashed password, index
//bcrypt for password hashing

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
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
    }
});
UserSchema.statics.findByEmail = function(email, callback) {
    return this.findOne({email: email}, function(err, user) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, user);
    });
};
UserSchema.methods.validatePassword = function(password, callback) {
    console.log('validate');
    console.log('compare ' + password + ' ' + this.password);
    bcrypt.compare(password, this.password, function(err, isValid) {
        if(err) {
            console.log('err in comparing');
            callback(err);
            return;
        }
        callback(null, isValid);
        console.log('says valid');
        console.log(isValid);
    });
};
var User = mongoose.model('User', UserSchema);

module.exports = User;