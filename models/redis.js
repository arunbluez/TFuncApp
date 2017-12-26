var redisClient = require('redis').createClient;
var redis = redisClient(6379, '127.0.0.1');

var channelName;
var clients;
var indices;

redis.auth("tfuncredispass");
module.exports.publish = function(channel, message){
  channelName = channel;
    redis.publish(channel,message);
}

function intervalFunc() {
  redis.client("list", function (err, value){
    if (err) throw(err)
    clients = value;
    indices = getIndicesOf("name", value);
})
console.log(clients);
console.log("........");
  for (index in indices){
    if(clients.substring(index + 5, index + 6) != ""){
      console.log(clients.substring(index + 5, index + 23));
  }
  console.log(indices[index]);
  }
  console.log("........");
  redis.publish(channelName,"status:1");
}

setInterval(intervalFunc, 1500);

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
