const mongoose = require("mongoose");

const models = {}; // Creating a unified object path for the file structure

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);
models['User'] = User; // Adding user-model to the object

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A username is required']
  },
  password: {
    type: String,
    required: [true, 'A password is required']
  }
});

const Account = mongoose.model("Account", accountSchema);
models['Account'] = Account;

module.exports = models;