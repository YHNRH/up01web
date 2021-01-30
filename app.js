var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// server routes:
var handlers = {};
// route for recieve list of image items from server in JSON format
handlers['/api/get-list'] = requestHandlers.getList;
handlers['/api/create']   = requestHandlers.create;
handlers['/api/remove']   = requestHandlers.remove;
handlers['/api/register'] = requestHandlers.register;
handlers['/api/login']    = requestHandlers.login;
handlers['/api/logout']   = requestHandlers.logout;

server.start(router.route, handlers);