const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Control = require('../models/redis');
// Register
router.get('/dashboard/:btnId/:state/:identifier', (req, res, next) => {
  var btn_id = req.params.btnId;
  var state = req.params.state == "true" ? 1 : 0;
  var userId = req.params.identifier;
console.log(userId);
  User.getUserById(userId, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User Error'});
    }else{
      var channel = user.authCode + ":module1";
      var message = "DO:16:" + state;

       console.log(channel + "       " + message);
       Control.publish(channel, message);

       return res.json({success: true, msg: 'Published'});
    }

 });



});


module.exports = router;
