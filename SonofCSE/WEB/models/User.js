const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    nickname: String,
    like: String,
    image: String,
    latitude: Number,
    longitude: Number,
    studentID: String,
    state: Number
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;