var myP1 = new Promise(function(resolve, reject){
	setTimeout(function () {
		resolve('5 sec done');
	}, 5000);

	setTimeout(function () {
		reject('3 sec done');
	}, 3000);
});

myP1.then(function (result) {
	console.log('myP1 is ok', result);
}).catch(function (error) {
	console.log('myP1 is not ok', error);
});