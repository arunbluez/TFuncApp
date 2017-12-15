const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  id: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rememberMe: {
    type: Boolean,
  },
  role: {
    type: String,
    required: true
  },
  terms: {
    type: Boolean,
  },
  fullName: {
    type: String,
    required: true
  },
  authCode: {
    type: String,
    required: true
  }
});


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUsers = function(callback){
  User.find(callback);
}


module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}


module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
