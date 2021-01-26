function start(response) {

	// console.log('CALL function csCB');
	response.writeHead(200, {"Content-Type": "text/html"});

	var usersList = {}
	usersList['Palchikov'] = '3ISIP-18-1';
	usersList['Nikitin']   = '3ISIP-18-1';
	usersList['Kazakov']   = '3ISIP-18-1';

	response.write("<table>");
	var keys = Object.keys(usersList);
	for (var i = 0; i < keys.length; i++) {
		response.write('<tr>');
		response.write(`<td>${usersList[ keys[i] ]}</td>`);
		response.write(`<td><a href='/profile'>${keys[i]}</a></td>`);
		response.write('</tr>');
	}
	response.write("</table>");

	response.end();
}

function profile(response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<h1>Profile</h1>');
	response.write('<a href="/">Home</a>');
	response.end();
}

function upload(response) {
 // console.log('CALL function csCB');
	  response.writeHead(500, {"Content-Type": "text/plain"});
	//  response.write("Hello World");
	  response.end();
}

exports.start = start;
exports.upload = upload;
exports.profile = profile;