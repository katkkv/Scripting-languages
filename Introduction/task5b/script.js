function getRandom() {
	return Math.floor(Math.random() * 10);
}


function task5b() {
	while (true) {
		let number = getRandom();
		let answer = Number.parseInt(prompt("Попробуйте угадать случайное число от 0 до 9"));

		if (!answer && answer != 0) {
			break;
		}
		
		(answer == number) ? alert(`Вы правы! Число: ${number}`) : alert(`Неправильно! Было загадано ${number}`);
	}
}


task5b();
