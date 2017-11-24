var redisClient = require('redis').createClient;
var redis = redisClient(6379, '127.0.0.1');

redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
    redis.publish(channel,message);
}
