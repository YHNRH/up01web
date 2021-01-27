var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = { }
handlers['/api/get-list'] = requestHandlers.getList;
// handlers["/start"]  = requestHandlers.start;
// handlers["/upload"] = requestHandlers.upload;
// handlers["/profile"] = requestHandlers.profile;
server.start(router.route, handlers);