/**
 * getting list items from database and return it as JSON to frontend 
 */
function getList(request, response){

	/*if(request.headers.token!='qwerty'){
		response.writeHead(401, {"Content-Type": "application/json"});
		response.write('{"status": "unauthorized"}');
		response.end();
		return;
	}*/

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

	var dataJSON = JSON.stringify(data); // JSON.parse(dataJSON)
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(dataJSON);

	setTimeout(function(){
		response.end();
	}, 3000);
	
}

exports.getList = getList;