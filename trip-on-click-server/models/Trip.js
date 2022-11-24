const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    finalDate: Date,
});

module.exports = mongoose.model('Trip', tripSchema)
