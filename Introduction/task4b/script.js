function task4b() {
	let first_number = Number.parseInt(prompt("Введите первое число"));
	let second_number = Number.parseInt(prompt("Введите второе число"));

	if ((first_number%4 == 1) && (second_number%4 == 1) && (first_number != second_number)) {
		alert(`Правильная пара чисел (${first_number}; ${second_number})`);
	} else if (((first_number%6 == 2) || (second_number%6 == 2)) && (first_number != second_number)) {
		alert(`Хорошая пара чисел (${first_number}; ${second_number})`);
	} else {
		alert(`Неправильная пара чисел (${first_number}; ${second_number})`);
	}
}


task4b();
