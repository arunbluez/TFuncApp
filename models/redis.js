var redisClient = require('redis').createClient;
var redis = redisClient(6379, '146.185.172.165');

redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
    redis.publish(channel,message);
}
