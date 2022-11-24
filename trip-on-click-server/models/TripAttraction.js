const mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
const Attraction = require('./Attraction');

const tripAttractionSchema = mongoose.Schema({
    trip : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip"
    },
    attraction : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attraction"
    },
    time : Date
});

module.exports = mongoose.model('TripAttraction', tripAttractionSchema)
