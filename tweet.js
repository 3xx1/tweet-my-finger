var twitter = require('twitter');

var client = new twitter({
    consumer_key:        'PQBjs08zSB2B4PRRFubqFK243',
    consumer_secret:     'JOEXhouX8kLIypCFNPaMZPPqQI2sssDhrNM4yUk3uU1gltJYN5',
    access_token_key:    '776506663041847296-ERlTB1s55dznfeN2UIq4H4SOGFr2ifD',
    access_token_secret: 'ju3zCrPgCnZmjxGLVFfNKYXP0drHusTfCOFfyIarqR2ML',
});

var now = new Date();

client.post('statuses/update',
        {status: '233 ubiquitel-seattle-1 ' + timeStamp()},
        function(error, tweet, response) {
        if (!error) {
            console.log('tweet posted successfully!');
            // console.log(tweet)
        } else {
          console.log(error);
        }
      });

function timeStamp() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

  return date.join("/") + " " + time.join(":") + " " + suffix;
}
