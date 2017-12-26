var redisClient = require('redis').createClient;
var redis = redisClient(6379, '127.0.0.1');

var channelName;


redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
  channelName = channel;
    redis.publish(channel,message);
}

function intervalFunc() {
  redis.publish(channelName,"status:1");
}

setInterval(intervalFunc, 1500);
