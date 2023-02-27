const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//NOTE: with this passport strategy we do not specify username and password
//these are provided via the plugin below
const UserSchema = new Schema({
    email: {
        type:String,
        required: true,
        unique: true
    }
});

//adds un and pw onto schema automatically
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);