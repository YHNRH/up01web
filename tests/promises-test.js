var myP1 = new Promise(function(resolve, reject){
	setTimeout(function(){
		reject('<b>ERROR1</b>');
	}, 1000);

	setTimeout(function(){
		resolve('<b>SUCCESS1</b>');
	}, 3000);
});

var myP2 = new Promise(function(resolve, reject){
	setTimeout(function(){
		reject('<b>ERROR2</b>');
	}, 3000);

	setTimeout(function(){
		resolve('<b>SUCCESS2</b>');
	}, 2000);
});

var myP3 = new Promise(function(resolve, reject){
	setTimeout(function(){
		reject('<b>ERROR3</b>');
	}, 2000);

	setTimeout(function(){
		resolve('<b>SUCCESS3</b>');
	}, 3000);
});

/*try{

	var myAllP = "";

	myP1.then(function(result){
		// console.log('myP1 is OK', result);
		myAllP += result;

		myP2.then(function(result){
			// console.log('myP1 is OK', result);
			myAllP += result;

			myP3.then(function(result){
			// console.log('myP1 is OK', result);
			myAllP += result;
				console.log('?', myAllP);
			}).catch(function(error){
				myAllP += error;
				console.log('?', myAllP);
			});


		}).catch(function(error){
			myAllP += error;

			myP3.then(function(result){
				// console.log('myP1 is OK', result);
				myAllP += result;
				console.log('?', myAllP);
			}).catch(function(error){
				myAllP += error;
				console.log('?', myAllP);
			});
		});

	}).catch(function(error){
		myAllP += error;

		myP2.then(function(result){
			// console.log('myP1 is OK', result);
			myAllP += result;		

			myP3.then(function(result){
				// console.log('myP1 is OK', result);
				myAllP += result;
				console.log('?', myAllP);
			}).catch(function(error){
				myAllP += error;
				console.log('?', myAllP);
			});

		}).catch(function(error){
			myAllP += error;
			myP3.then(function(result){
				// console.log('myP1 is OK', result);
				myAllP += result;
				console.log('?', myAllP);
			}).catch(function(error){
				myAllP += error;
				console.log('?', myAllP);
			});
		});

	});
} catch(e){
	//
}*/

async function test(){
	try {
		var myAllP = await myP1 + await myP2 + await myP3;
		console.log('?', myAllP);	
	} catch(e){
		//
	}
	
}

(function(){
	test();	
})();

