// var Twit = require("twit");
// var T = new Twit({
//     consumer_key:         'FbBOWAi4WGW7eMg7peI5c1SbU',
//     consumer_secret:      '	eRGkLWYEBGe6VKeZ1U6paAN6IxYk3OlZZC8MpNNS5V7RozMFwo',
//     access_token:         '	31020029-OBSz3mKQQi4akUpIEzIAzxsiMrFg0gbrTbXRXtrMp',
//     access_token_secret:  '	8FLhmoFWtQpOY6lvknD6BYlWBg3344WZfVYcQkXjTvmST',
//     timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
//   });
var Twitter = require('twitter');
var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
   if ( err ) {
       console.log('Error occurred: ' + err);
       return;
   }

   console.log(data);
});

var client = new Twitter({
  consumer_key:             'FbBOWAi4WGW7eMg7peI5c1SbU',
      consumer_secret:      'eRGkLWYEBGe6VKeZ1U6paAN6IxYk3OlZZC8MpNNS5V7RozMFwo',
      access_token:         '31020029-OBSz3mKQQi4akUpIEzIAzxsiMrFg0gbrTbXRXtrMp',
      access_token_secret:  '8FLhmoFWtQpOY6lvknD6BYlWBg3344WZfVYcQkXjTvmST'
});
var getTweets = function(){


var params = {screen_name: 'chooch88'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  console.log("program is starting");
  if (!error) {
  
    console.log(tweets);
  }
});
};
