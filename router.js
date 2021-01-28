var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server(`${__dirname}/static`);

function route(handle, pathname, request, response) {
	//onsole.log("Request:", request);
    console.log(`About to route a request from ${request.socket.remoteAddress} for ${pathname}`);
  if ((typeof handle[pathname]) === 'function') {
    handle[pathname](request, response);
  } else {
    fileServer.serve(request, response);
  }
}

exports.route = route;