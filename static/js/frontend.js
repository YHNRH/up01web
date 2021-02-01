var intervalPointer;

function router(state){
	var route = document.location.hash.replace('#', ''); // login, list, e.t.c...

	switch(route){
		case 'login':
		document.getElementById("app").innerHTML='Здесь будет форма логина';
		break;
		case 'list':
		document.getElementById("app").innerHTML='Здесь будет форма списка';
		break;
		default:
		document.getElementById("app").innerHTML='Здесь будет форма списка';
	}

	/**
	 * пример переключения между страницамми одностраничного приложения (без перезагрузки страницы)
	 **/

	// очистка таймаута (функция router -  это коллбэк на события popstate и load объекта window)
	// поэтому необходимо при каждом запуске этой функции отменять предыдущий setInterval,
	// иначе коллбэки на setInterval будут копиться и приложение будет работать неправильно
	clearInterval(intervalPointer);

	// запуск функции setInterval с сохранением указателя на неё в переменной выше области видимости
	// функции router (для отмены и переназначения при следующем вызове)
	intervalPointer = setInterval(function(){
		// раз в секунду переключаемся между маршрутами login и list
		var newRoute;
		if(route === 'login'){
			newRoute = 'list';
		} else if(route === 'list'){
			newRoute = 'login';
		} else {
			newRoute = 'list';
		}

		// непосредственно переключение
		document.location.hash = `#${newRoute}`;
	}, 1000); // раз в секунду

}


window.addEventListener('popstate', router);
window.addEventListener('load', router);