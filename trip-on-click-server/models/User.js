const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

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

  username: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    min: 6,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],

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

userSchema.pre("save", async function (next) {
  console.log("save passwords hash");
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

<<<<<<< HEAD

=======
>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
var User = mongoose.model('User', userSchema);
module.exports = User;