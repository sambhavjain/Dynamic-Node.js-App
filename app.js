//Problem: We need a simple way to look at a user'sbadgeCount but and JS point from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our template via HTTP
var router = require('./router.js');
//1. Create a web server
var http = require('http');
http.createServer(function(request, response){
	router.home(request, response);
	router.user(request, response);
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080');

		
//Function that handles the reading of files and merge in values 
	//read from file and get a string
	//merge values into string

