const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    content: String,
    target: String,
    targetID: Number,
    reporter: String,
    reporterID: Number,
    date: Date
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;