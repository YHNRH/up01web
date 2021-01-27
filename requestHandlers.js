function start(response) {

	// console.log('CALL function csCB');
	// response.writeHead(200, {"Content-Type": "text/html"});

	var usersList = {}
	usersList['Palchikov123'] = '3ISIP-18-1';
	usersList['Nikitin456']   = '3ISIP-18-1';
	usersList['Kazakov789']   = '3ISIP-18-1';

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

exports.getList = function(response){
	var data = [
		{id:1, title:"Рис. 1"},
		{id:2, title:"Рис. 2"},
		{id:4, title:"Рис. 4"},
		{id:1, title:"Рис. 1"},
		{id:2, title:"Рис. 2"},
		{id:4, title:"Рис. 4"},
		{id:1, title:"Рис. 1"},
		{id:2, title:"Рис. 2"},
		{id:4, title:"Рис. 4"},
		{id:1, title:"Рис. 1"},
		{id:2, title:"Рис. 2"},
		{id:4, title:"Рис. 4"},
		{id:5, title:"Рис. 5"}
	];


//[{"id":1,"title":"Рис. 1"},{"id":2,"title":"Рис. 2"},{"id":4,"title":"Рис. 4"},{"id":5,"title":"Рис. 5"}]

	var dataJSON = JSON.stringify(data); // JSON.parse(dataJSON)
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(dataJSON);


	setTimeout(function(){
		response.end();
	}, 15000);

	
}