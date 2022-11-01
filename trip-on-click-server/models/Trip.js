const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
id: String,
startDate: String,
finalDate: String,
userId: String,
attractionsId: [String]


});

module.exports = mongoose.model('Trip', tripSchema )
