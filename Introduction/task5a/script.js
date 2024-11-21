function task5a() {
	let first = Number.parseInt(prompt("Введите первое число"));
	let second = Number.parseInt(prompt("Введите второе число"));

	if ((!first && first != 0) || (!second && second != 0)) {
		alert("Вы ввели не число!");
	} else {
		if (first == second) {
			document.write(`Оба числа равны ${first}`);
		} else if (first > second) {
			document.write(`${first} больше ${second}`);
		} else if (first < second) {
			document.write(`${first} меньше ${second}`);
		} else {
			alert(`Если вы это видите - вы счастливчик (${first}, ${second})`);
		}
	}
}


task5a();
