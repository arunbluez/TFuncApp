const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    rememberMe: req.body.rememberMe,
    terms: req.body.terms,
    confirmPassword: req.body.confirmPassword,
    fullName: req.body.fullName,
    authCode: req.body.authCode,
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
console.log(req.body.email);
  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {

      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data:user._id}, 'secret', {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'Bearer ' +token,
          user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


router.get('/getUsers', (req, res, next) => {


  User.getUsers((err, users) => {
    if(err) throw err;
    if(!users){
      return res.json({success: false, msg: 'User not found'});
    }else{
      console.log(users);
      return res.json(users);
    }
  });
});


router.get('/logout', (req, res, next) => {
  res.json({
    success: true,
    user: ''
  });
});



// Profile
router.get('/dashboard', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  console.log("in profile");
  res.json({user: req.user});
});

module.exports = router;
