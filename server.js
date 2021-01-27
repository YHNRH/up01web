var http = require("http");
var url = require("url");


function start(route, handle){

	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		// console.log("Request for " + pathname + " received.");

		route(handle, pathname, request, response);

	}

	var port = 8888;
	http.createServer(onRequest).listen(port);
	console.log(`Server started on port ${port}`);
	//console.log('Server started on port ' + port.toString();
}

exports.start = start;