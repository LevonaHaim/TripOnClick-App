const mongoose = require('mongoose');

const attractionSchema = mongoose.Schema({
id: String,
city: String,
category: String,
price: Number,
accessibility: Boolean,
parking: Boolean,
destiPopulation: String,
url: String,
description: String,
hoursNum: Number


});

module.exports = mongoose.model('Attraction', attractionSchema )