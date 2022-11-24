const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
id: String,
startDate: Date,
finalDate: Date,

tripAttractions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TripAttraction"
    }
  ]


});

module.exports = mongoose.model('Trip', tripSchema )
