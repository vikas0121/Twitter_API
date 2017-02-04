var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var twt_msg = {
    status: 'Hello world testing api integration...'
}

T.post('statuses/update',twt_msg,tweeted);

function tweeted(err, data, response){
    if(err)
        console.log("Something went wrong.");
    else{
        console.log("posted !!!");
    }
}