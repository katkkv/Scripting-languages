function task6() {
	let date = new Date();
	let dayNumber = date.getDay();
	let dayName;

	switch (dayNumber) {
		case 0: 
			dayName = "воскресенье";
			break;
		case 1: 
			dayName = "понедельник";
			break;
		case 2:
			dayName = "вторник";
			break;
		case 3:
			dayName = "среда";
			break;
		case 4:
			dayName = "четверг";
			break;
		case 5:
			dayName = "пятница";
			break;
		case 6:
			dayName = "суббота";
			break;
		default:
			dayName = undefined;
	}

	if (dayName) {
		document.write(`Сегодня ${dayName}`);
	} else {
		alert(`Неизвестное значение '${dayNumber}'`);
	}
}


task6();
