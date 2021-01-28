var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {}
handlers['/api/get-list'] = requestHandlers.getList;
handlers['/api/create'] = requestHandlers.create;

server.start(router.route, handlers);