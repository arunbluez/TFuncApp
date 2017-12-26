var redisClient = require('redis').createClient;
var redis = redisClient(6379, '127.0.0.1');

var channelName;
var clients;
var indices;

redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
    redis.publish(channel,message);
}

function intervalFunc() {
  redis.client("list", function (err, value){
    if (err) throw(err)
    clients = value;
    indices = getIndicesOf("name", value);
})
  for (index in indices){
    if(clients.substring(indices[index] + 5, indices[index] + 6) != " "){
      channelName = clients.substring(indices[index] + 5, indices[index] + 23);
      redis.publish(channelName,"status:1");
  }
  }
}

setInterval(intervalFunc, 10000);

function getIndicesOf(searchStr, str) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];

    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();

    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}
