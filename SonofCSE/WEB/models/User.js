const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    nickname: String,
    like: String,
    image: String
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;