var redisClient = require('redis').createClient;
var redis = redisClient(6379, '127.0.0.1');

var chanelName;


redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
  chanelName = channel;
    redis.publish(channel,message);
}

function intervalFunc() {
  redis.publish(chanelName,"Test");
}

setInterval(intervalFunc, 1500);
