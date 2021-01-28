let { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize = new Sequelize('db', 'user', '123456', 
	{ host: 'localhost', dialect: 'mariadb'});

class Item extends Model{};

	Item.init({
		id:{ 
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV1
			},
		title    : DataTypes.STRING,
		filepath : DataTypes.STRING
			}, 
		{
		sequelize, modelName: 'items'});

	Item.sync ();
exports.getList = function(request, response){

	Item.findAll({}).then(function (okData) {
		var data = [];
		okData.forEach(function (e) 
		{
			data.push({id: e.id, title: e.title, filepath: e.filepath});
		});
		var dataJSON = JSON.stringify(data);
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(dataJSON);
		response.end();
		}
		).
		catch(function (errData) {
			console.log('ERROR DATA', errData)
		});


}

function create(request, response) {
	
	let body = [];
	request.on('data', function(chunk){
		body.push(chunk);
	}).on('end', function () {
		body = body.join('');
		var dataJSON = JSON.parse(body);
		console.log('request? title', dataJSON.title);
		console.log('request? filepath', dataJSON.filepath);
		Item.create({
			title: dataJSON.title,
			filepath: dataJSON.filepath
		}).then(function(okData){
			console.log(`result ${okData}`);
			response.writeHead(200, {"Content-Type": "application/json"});
			response.end();

		}).then(function (errData) {
			console.log(`err ${errData}`);
			response.writeHead(503, {"Content-Type": "application/json"});
			response.end();
			
		});
	});
	// for (var i = 1; i<20; i+=1){
	// Item.create({
	// 	title    : `Рисунок ${i}`,
	// 	filepath : '/home/user/server/img'
	// }).then(function (okData) {
	// 	console.log('ok data', okData);
	// }).catch(function (errorData) {
	// 	console.log('error data', errorData);
	// });}
	
		}
exports.create = create;

