<<<<<<< HEAD
var intervalPointer;

// client routes:
var handlers = {};

handlers['login'] = login;
handlers['list'] = list;
handlers['help'] = help;

function router(state){
	var route = document.location.hash.replace('#', ''); // login, list, e.t.c...
	if ((typeof handlers[route]) === 'function') {
		handlers[route]();
	} else {
		handlers['login']();
	}
}

window.addEventListener('popstate', router);
window.addEventListener('load', router);
window.addEventListener('load', function(){
	var btnLogout = document.getElementById('btn-logout');
	btnLogout.addEventListener('click', doLogout);
});
=======

function refresh(inputData){
	var listTableBody = document.getElementById('list-table-body');
	listTableBody.innerHTML = '';

	inputData.forEach(function(oneElement){
		listTableBody.innerHTML += `<tr>
				<td class="c1"><input type="checkbox" name="chb-${oneElement.id}" title="выберите для действия"></td>
				<td>${oneElement.title}</td>
				<td class="c3"><button>Скачать</button></td>
			</tr>`;
	});
}

function downloadDataFromServer(){

	document.getElementById('list-table-body').innerHTML=`<tr><td colspan=3>Please wait... Loading....</td></tr>`;	
	fetch('/api/get-list').then(function(response){
		if(response.ok){
			response.json().then(function(data){
				refresh(data);
			});
		} else {
			console.log('Somethin went wrong...');
		}
	}).catch(function (error) {
		console.log('Somethin went wrong...', error);
	});
}

window.onload = function(){
	downloadDataFromServer();
};
>>>>>>> e222e5ee068a1a294a8be23093738c9e2fb51920
