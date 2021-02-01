
function router(state){
	console.log('REOUTER WAS CALLED. HASH=', document.location.hash);
	test();
}


window.addEventListener('popstate', router);
window.addEventListener('load', router);