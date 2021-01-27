var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server(`${__dirname}/static`);

function route(handle, pathname, request, response) {
  console.log("About to route a request for " + pathname);
  if ((typeof handle[pathname]) === 'function') {
    handle[pathname](response);
  } else {
    //console.log("No request handler found for " + pathname);
    //response.end();
    fileServer.serve(request, response);
  }
}

exports.route = route;