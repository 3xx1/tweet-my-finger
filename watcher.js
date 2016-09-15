var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'PQBjs08zSB2B4PRRFubqFK243',
    consumer_secret:     'JOEXhouX8kLIypCFNPaMZPPqQI2sssDhrNM4yUk3uU1gltJYN5',
    access_token_key:    '776506663041847296-ERlTB1s55dznfeN2UIq4H4SOGFr2ifD',
    access_token_secret: 'ju3zCrPgCnZmjxGLVFfNKYXP0drHusTfCOFfyIarqR2ML',
});

client.stream('statuses/filter',
          {track: 'ubiquitel-seattle'},
          function(stream) {

          stream.on('data', function(tweet) {
              console.log(tweet.text);
          });

          stream.on('error', function(error) {
              console.log(error);
          });
          }
         );