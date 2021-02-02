var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

<<<<<<< HEAD
// server routes:
var handlers = {};
// route for recieve list of image items from server in JSON format
handlers['/api/get-list'] = requestHandlers.getList;
handlers['/api/create']   = requestHandlers.create;
handlers['/api/remove']   = requestHandlers.remove;
handlers['/api/register'] = requestHandlers.register;
handlers['/api/login']    = requestHandlers.login;
handlers['/api/logout']   = requestHandlers.logout;
=======
var handlers = {}
handlers['/api/get-list'] = requestHandlers.getList;
handlers['/api/create'] = requestHandlers.create;
>>>>>>> e222e5ee068a1a294a8be23093738c9e2fb51920

server.start(router.route, handlers);