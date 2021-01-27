var myP1 = new Promise(function(resolve, reject){

	setTimeout(function(){
		reject('3 sec done');
	}, 3000);

	setTimeout(function(){
		resolve('5 sec done');
	}, 3000);

});

myP1.then(function(result){
	console.log('myP1 is OK', result);
}).catch(function(error){
	console.log('myP1 is NOT OK', error);
});