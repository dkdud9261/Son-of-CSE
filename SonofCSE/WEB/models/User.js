const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    nickname: String,
    like: String,
    image: String,
    latitude: Number,
    longitude: Number
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;