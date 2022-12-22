const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    finalDate: Date,
    attractions: [
        {
            attractionDetails : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Attraction"
            },
            start: Date,
            timeDistance:Number,
            distanceFromPrev:Number

        }

    ]
});

module.exports = mongoose.model('Trip', tripSchema)
