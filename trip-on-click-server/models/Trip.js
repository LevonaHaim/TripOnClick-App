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
<<<<<<< HEAD
            }
=======
            },
>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
        }

    ]
});

module.exports = mongoose.model('Trip', tripSchema)
