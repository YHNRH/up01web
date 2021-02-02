var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server(`${__dirname}/static`);

<<<<<<< HEAD
function route(handle, pathname, request, response) {
	//onsole.log("Request:", request);
    console.log(`About to route a request from ${request.socket.remoteAddress} for ${pathname}`);
  if ((typeof handle[pathname]) === 'function') {
    handle[pathname](request, response);
  } else {
    fileServer.serve(request, response);
  }
=======
function route(handle, pathname, request, response){
	console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
  	fileServer.serve(request, response);
  }

>>>>>>> e222e5ee068a1a294a8be23093738c9e2fb51920
}

exports.route = route;