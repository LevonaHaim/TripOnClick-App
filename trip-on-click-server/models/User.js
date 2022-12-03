const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  username: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  
  trips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip"
    }
  ]

});


var User = mongoose.model('User', userSchema);
module.exports = User;