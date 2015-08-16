
var Profile = require('./profile.js');
var render = require('./renderer.js');
// Handle a HTTP route GET / and POST /i.e Home
function home(request, response) {
	//if  url === "/" && GET
	if(request.url === "/") {
		//show search
		response.writeHead(200,{'Content-Type': 'text/html'});
		render.view("header", {}, response);
		render.view("search", {}, response);
		render.view("footer", {}, response);
		response.end();
	}
		//if url == "/" && POST
			//redirect to /:username
}
// Handle HTTP route GET /:username i.e /sambhavjain8
	function user(request, response) {
	//if url == "/..."
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200,{'Content-Type': 'text/html'});
		render.view("header", {}, response);
		//get json from Treehouse
		var studentProfile = new Profile(username);
		//on "end"
		studentProfile.on("end", function(profileJSON){
			//show profile
			var values = {
				avatarUrl : profileJSON.gravatar_url,
				username : profileJSON.profile_name,
				badgeCount : profileJSON.badges.length,
				javascriptPoints : profileJSON.points.JavaScript
			 }
			render.view("profile", values, response);
	 		render.view("footer", {}, response);
			response.end();
		});
		//on "error"
		studentProfile.on("error", function(error){
		//show error
			render.view("error", {errorMessage:error.message}, response);
			render.view("search", {}, response);
			render.view("footer", {}, response);
			response.end();
		});

	}
}

module.exports.home = home;
module.exports.user = user;
