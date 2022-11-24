const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    finalDate: Date,
<<<<<<< HEAD
=======
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
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
});

module.exports = mongoose.model('Trip', tripSchema)
