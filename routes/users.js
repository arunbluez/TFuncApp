const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const uniqid = require('uniqid');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    id: req.body.id,
    email: req.body.email,
    password: req.body.password,
    rememberMe: req.body.rememberMe,
    role: req.body.role,
    terms: req.body.terms,
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

//delete User
router.delete('/delete/:email', function(req, res, next){
    User.deleteUser(req.params.email, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to delete user'});
      } else {
        res.json({success: true, msg:'User Deleted'});
      }
    });
});

//Edit user
router.put('/edit', function(req, res, next){
    var editedUser = req.body;
    var user = {};

        user.fullName = editedUser.fullName;
        user.email = editedUser.email;
        user.authCode = editedUser.authCode;
        user.role = editedUser.role;

    if(!user){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
      User.editUser(user.email,user, (err, user) => {
        if(err){
          res.json({success: false, msg:'Failed to Update user'});
        } else {
          res.json({success: true, msg:'User Updated'});
        }
      });
    }
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

router.get('/getUserRole/:email', (req, res, next) => {
  console.log(req.params.email);
  User.getUserByEmail(req.params.email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }else{
      return res.json(user.role);
    }
  });
});


router.get('/generateAuthCode', (req, res, next) => {
  var unique = false;


  var authCode = uniqid.process();
  User.checkAuthCode(authCode, (err, users) => {
    if(err) throw err;
    if(!users){
      unique = true;
      return res.json(authCode);
    }else{
      return res.json('duplicate AuthCode found');
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
