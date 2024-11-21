function task4a() {
	let number = Number.parseInt(prompt("Введите любое число"));

	if (!number && number != 0) {
		alert("Вы ввели не число!");
	} else {
		if ((number != 15) && (number < 20 || number > 40) && (number % 5 == 0)) {
			alert("Правильное значение");
		} else {
			alert("Неправильное значение");
		}
	}
}


task4a();
