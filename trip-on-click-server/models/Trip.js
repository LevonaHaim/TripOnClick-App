const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    finalDate: Date,
    attractions: [
        {
            attraction : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Attraction"
            },
            time : {
                type : Date,
                default: Date.now,
            }
        }

    ]
});

module.exports = mongoose.model('Trip', tripSchema)
