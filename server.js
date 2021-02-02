var http = require("http");
var url = require("url");
<<<<<<< HEAD


function start(route, handle){

	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		// console.log("Request for " + pathname + " received.");

		route(handle, pathname, request, response);

	}

	var port = 8888;
	http.createServer(onRequest).listen(port);
	console.log(`Server started on port ${port}`);
	// console.log('Hello, nodemon!');
	// console.log('Server started on port ' + port.toString();
}

exports.start = start;
=======
var port = 8888;

function start(route, handle){
		http.createServer(function(request, response) {

 	      var pathname = url.parse(request.url).pathname;
		  route(handle, pathname, request, response);
		}).listen(port);

			console.log (`Server has started on port ${port}`);
		}
exports.start = start;
>>>>>>> e222e5ee068a1a294a8be23093738c9e2fb51920
