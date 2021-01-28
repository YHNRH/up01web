var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// server routes:
var handlers = {};
// route for recieve list of image items from server in JSON format
handlers['/api/get-list'] = requestHandlers.getList;
handlers['/api/create'] = requestHandlers.create;

server.start(router.route, handlers);