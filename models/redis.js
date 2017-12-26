var redisClient = require('redis').createClient;
var redis = redisClient(6379, '127.0.0.1');

redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
    redis.publish(channel,message);
}

function intervalFunc() {
  console.log('Cant stop me now!');
}

setInterval(intervalFunc, 1500);
