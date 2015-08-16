//Function that renders all the static content of the page

var fs = require('fs');

function view(templateName, values , response) {
  //Read files from the template file
  var fileContent = fs.readFileSync('./views/' + templateName + ".html");
  //Insert  data into static files

  //Write content to the response
  response.write(fileContent);
}
module.exports.view = view;
