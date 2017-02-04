// importing the twit package
var Twit = require('twit');
// importing the config file which contains the keys & tokens
var config = require('./config');

var T = new Twit(config);
var params ={
    q: 'Narendra Modi',
    count: 50
}

T.get('search/tweets',params,searchData);

function searchData(err, data, response){
    console.log(data);
}
