const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    id: String,
    startDate: Date,
    finalDate: Date,
});

module.exports = mongoose.model('Trip', tripSchema)
