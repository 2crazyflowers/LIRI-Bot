
//not ready for this yet
require("dotenv").config();
//need to require keys.js
var tomatoesRating;
var internetRating;

var keys = require("./keys.js");

var Twitter = require('twitter');
var request = require('request');
var client = new Twitter(keys.twitter);
//need to require keys.js
var input = process.argv;
var command = input[2];
console.log(input[2]);
var name = "";
for (i = 3; i < input.length; i++) {
	name = name + " " + input[i];

}
name = name.trim().replace(" ", "+");
// console.log(name);
//console.log(nodeArgs.length);
if (command === "my-tweets") {
	    		
	var params = {screen_name: 'bracewell_sara', limit: 2};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	// console.log(response, null, 2);
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


// else if (command === "spotify-this-song") {

// }

else if (command === "movie-this") {
 	if (name === "") {
 		name = "Mr. Nobody";
 	}

	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy";

	// This line is just to help us debug against the actual URL.
	// console.log(queryUrl);

	request.get(queryUrl, function(error, response, body) {
		
    	// console.log(response);

	  	if (!error && response.statusCode === 200) {
	  		//var body = JSON.parse(body);
	  		for (i = 0; i < JSON.parse(body).Ratings.length; i++) {
	  			if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
	  				tomatoesRating = JSON.parse(body).Ratings[i].Value;
	  				// console.log(tomatoesRating);
	  			}
	  			if (JSON.parse(body).Ratings[i].Source === "Internet Movie Database") {
	  				internetRating = JSON.parse(body).Ratings[i].Value;
	  				// console.log(internetRating);
	  			}
	  		}
	  		// * Title of the movie.
			//   * Year the movie came out.
			//   * IMDB Rating of the movie.
			//   * Rotten Tomatoes Rating of the movie.
			//   * Country where the movie was produced.
			//   * Language of the movie.
			//   * Plot of the movie.
			//   * Actors in the movie.
			//If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
	  		var myMovie =
  			"-----------------------------------------------------------------------" + "\r\n" +
    		"Moive Title: " + JSON.parse(body).Title + "\r\n" +
    		"Year movie released: " + JSON.parse(body).Year + "\r\n" +
    		"Movie rating: " + JSON.parse(body).Rated + "\r\n" + 
    		"Rotten Tomatoes Rating: " + tomatoesRating + "\r\n" +
    		"Internet Movie Database Rating: " + internetRating + "\r\n" +
    		"Country: " + JSON.parse(body).Country + "\r\n" + 
    		"Language: " + JSON.parse(body).Language + "\r\n" + 
    		"Movie Plot: " + JSON.parse(body).Plot + "\r\n" +
    		 "-----------------------------------------------------------------------" + "\r\n"
    		console.log(myMovie);

  		}
	});

}

// if (command === "do-what-it-says") {

// }

else {
	console.log("error, try again");
}

//Once I add more than just twitter feed this will help to pull command
//and the name of whatever is being searched for
// Grab the movieName which will always be the third node argument.

// Store all of the arguments in an array if multiple names

// // Create an empty variable for holding the movie name
// var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// 

// Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`



