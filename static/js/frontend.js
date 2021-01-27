// var data = [
// {id:1, title:"Рис. 1"},
// {id:2, title:"Рис. 2"},
// {id:4, title:"Рис. 4"},
// {id:5, title:"Рис. 5"}
// ];

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
	fetch('/api/get-list').then(function(response){
		if(response.ok){
			response.json().then(function(data){
				refresh(data);
			});
		} else {
			console.log('Somethin went wrong...');
		}
	});
}

window.onload = function(){
	document.getElementById('list-table-body').innerHTML=`<tr><td colspan=3>Please wait... Loading....</td></tr>`;
	downloadDataFromServer();
};