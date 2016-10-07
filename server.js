/**
 * node.js webserver simple demo
 * author: Stephan Schiffner
 * Software Engineering 1, WS 16/17
 * For documentation of the node.js http module see: https://nodejs.org/dist/latest-v4.x/docs/api/http.html
 * For a html reference see e.g. https://selfhtml.org
 * Read the docs and try to fully understand what's happening in this application.
 */

// load the http module
var http = require('http');

// create a listener that handels webserver requests
var requestListener = function(request, response) {
  response.writeHead(200, {'content-type': 'text/html; charset=utf-8}'});
  // create a html document as response
  var doc = '<h3>Welcome to Software Engineering 1</h3>'
            + '<p>This a <b>simple</b> example of <i>html markup</i></p>'
            + '<p>node.js documentation: <a href="https://nodejs.org/dist/latest-v4.x/docs/api/http.html">click here</a></p>'
            + '<p>html reference: <a href="https://selfhtml.org" target="_blank">click here</a></p>'
  response.end(doc);
}

// create and start the server
http.createServer(requestListener).listen(8080, 'localhost');

// log info that your server is running
console.log('Your own webserver is running. Open your browser and navigate to http://localhost:8080');
