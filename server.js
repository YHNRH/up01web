var http = require("http");
var url = require("url");
var port = 8888;

function start(route, handle){
		http.createServer(function(request, response) {

 	      var pathname = url.parse(request.url).pathname;
		  route(handle, pathname, request, response);
		}).listen(port);

			console.log (`Server has started on port ${port}`);
		}
exports.start = start;
