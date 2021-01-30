let { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize = new Sequelize('db', 'user', '123456', 
	{ host: 'localhost', dialect: 'mariadb' });

/**
 * Item Model - begin
 */
class Item extends Model {};
Item.init({
		id: {
	    	type: DataTypes.UUID,
	    	defaultValue: DataTypes.UUIDV1,
	    	primaryKey: true
  		},
  		title: DataTypes.STRING,
  		filepath: DataTypes.STRING
	}, { 
		sequelize, 
		modelName: 'items' 
});
Item.sync(); // { force: true }
/**
 * Item Model - end
 */

/**
 * User Model - begin
 */
class User extends Model {};
User.init({
		id: {
	    	type: DataTypes.UUID,
	    	defaultValue: DataTypes.UUIDV1,
	    	primaryKey: true
  		},
  		login: DataTypes.STRING,
  		pass: DataTypes.STRING,
  		access: DataTypes.INTEGER
	}, { 
		sequelize, 
		modelName: 'users'
});
User.sync(); // { force: true }
/**
 * User Model - end
 */

/**
 * Token Model - begin
 */
class Token extends Model {};
Token.init({
		id: {
	    	type: DataTypes.UUID,
	    	defaultValue: DataTypes.UUIDV1,
	    	primaryKey: true
  		},
  		userId: DataTypes.UUID,
  		expire: DataTypes.BIGINT
	}, { 
		sequelize, 
		modelName: 'tokens' 
});
Token.sync(); // { force: true }
/**
 * Token Model - end
 */


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

	Item.findAll({}).then(function(data) {
		var result = [];
		data.forEach(function (e) {
			result.push({ id: e.id, title: e.title, filepath: e.filepath });
		});
		var dataJSON = JSON.stringify(result);
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(dataJSON);
		response.end();
	}).catch(function(err){
		console.log(`err? ${err}`);
	})
}


/**
 * Функция обработки операции добавления записи в БД.
 */
function create(request, response){
	var body = [];
	request.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = body.join('');
		var dataJSON = JSON.parse(body);

		Item.create({
			title: dataJSON.title,
			filepath: dataJSON.filepath
		}).then(function(okData) {
			console.log(`result?`, okData);
			response.writeHead(200, {"Content-Type": "application/json"});
			response.end();
		}).catch(function(errData) {
			console.log('ERROR', errData);
			response.writeHead(503, {"Content-Type": "application/json"});
			var error = {
				message: errData
			};
			response.write(JSON.stringify(error));
			response.end();
		});
	});
}

/**
 * Функция обработки операции удаления записи из БД.
 */
function remove(request, response) {
	var body = [];
	request.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = body.join('');
		var dataJSON = JSON.parse(body);
		console.log('DATA', dataJSON);
		dataJSON.forEach(function(id) {
			Item.destroy({
				where: {
					id: id
				}
			})
		});
		response.writeHead(204, {"Content-Type": "application/json"});
		response.end();
	});
}

/**
 * Функция создания тестовых данных для тестирования аутентификации (удалить после релиза)
 */
function authCreateTestData(request, response) {
	User.create({
			login: 'vasya',
			pass: '123321',
			access: 1
		}).then(function(okData) {

			var userId=okData.dataValues.id;
			var login=okData.dataValues.login;
			var tokenTTL = 60; // min
			var today = Date.now();
			var expire = today + tokenTTL * 60 * 1000;

			Token.create({
				userId: userId,
				expire: expire
			}).then(function(okData) {
				response.writeHead(201, {"Content-Type": "application/json"});
				response.write(JSON.stringify({login:login, token: okData.dataValues.id}));
				response.end();
			}).catch(function(errData) {
				response.writeHead(503, {"Content-Type": "application/json"});
				var error = {
					message: errData
				};
				response.write(JSON.stringify(error));
				response.end();
			});

		}).catch(function(errData) {
			response.writeHead(503, {"Content-Type": "application/json"});
			var error = {
				message: errData
			};
			response.write(JSON.stringify(error));
			response.end();
		});
}

/**
 * Функция удаления тестовых данных для тестирования аутентификации (удалить после релиза)
 */
function authRemoveTestData(request, response) {
	User.destroy({truncate: true});
	Token.destroy({truncate: true});
	response.writeHead(204, {"Content-Type": "application/json"});
	response.end();
}

function register(request, response) {
	var body = [];
	request.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = body.join('');
		var dataJSON = JSON.parse(body);
		User.create({
			login:  dataJSON.login,
			pass:   dataJSON.password,
			access: 1
		}).then(function (okData) {
			response.writeHead(204, {"Content-Type": "application/json"});
			response.end();
		}).catch(function (errData) {
			response.writeHead(503, {"Content-Type": "application/json"});
			var result = { message: "Could not create user." };
			response.write(JSON.stringify(result));
			response.end();
		})
	});
}

exports.getList  = getList;
exports.create   = create;
exports.remove   = remove;
exports.register = register;
exports.authCreateTestData = authCreateTestData;
exports.authRemoveTestData = authRemoveTestData;