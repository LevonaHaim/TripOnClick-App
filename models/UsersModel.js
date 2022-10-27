const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
id: String,
username: String,
password: String,
email: String,
tripId: [String]


});

module.exports = mongoose.model('User', userSchema )