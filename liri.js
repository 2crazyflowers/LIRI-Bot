
//not ready for this yet
require("dotenv").config();
//need to require keys.js
var keys = require("./keys.js");

var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
//need to require keys.js
var input = process.argv;
var command = input[2];
console.log(input[2]);

//console.log(nodeArgs.length);
if (command === "my-tweets") {
	    		
	var params = {screen_name: 'bracewell_sara', limit: 2};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	console.log(response, null, 2);
	    for (var i = tweets.length - 1; i >= 0; i--) {
	    	var myTweets = 
	    		"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" + "\r\n" + "\r\n" +
	    		"Tweet Number: " + (tweets.length-i) + "\r\n" +
	    		"Posted on: " + tweets[i].created_at + "\r\n" +
	    		"Tweet Posted: " + tweets[i].text + "\r\n" + "\r\n" + "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"

	    	console.log(myTweets);
			} 
		}
	})
}

else {
	console.log("error, try again");
}

// if (command === "spotify-this-song") {

// }

// if (command === "movie-this") {


// }

// if (command === "do-what-it-says") {

// }


//Once I add more than just twitter feed this will help to pull command
//and the name of whatever is being searched for
// Grab the movieName which will always be the third node argument.

// Store all of the arguments in an array if multiple names

// // Create an empty variable for holding the movie name
// var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {

// 	command = nodeArgs[2];

//     movieName = movieName + "+" + nodeArgs[i];

//   }

//   else {

//     movieName += nodeArgs[i];

//   }
// }

// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("Release Year: " + JSON.parse(body).Year);
//   }
// });

// Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`



