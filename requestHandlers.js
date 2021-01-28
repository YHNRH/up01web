let { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize = new Sequelize('db', 'user', '123456', 
	{ host: 'localhost', dialect: 'mariadb' });

class Item extends Model {};

Item.init({
	id: {
	    type: DataTypes.UUID,
	    defaultValue: DataTypes.UUIDV1,
	    primaryKey: true
  	},
  	title: DataTypes.STRING,
  	filepath: DataTypes.STRING
	}, { sequelize, modelName: 'items' });

Item.sync(); // { force: true }


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

	Item.findAll({}).then(function(data){
		console.log(`data? ${data}`);
	}).catch(function(err){
		console.log(`err? ${err}`);
	})

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

function create(request, response){
	
	Item.create({
		title: 'title1',
		filepath: '/home/user/server/images'
	}).then(function(okData){
		console.log(`okData ${okData}`);
	}).catch(function(errData){
		console.log(`errData ${errData}`);
	});

	response.writeHead(200, {"Content-Type": "application/json"});
	response.end();

}

exports.getList = getList;
exports.create = create;