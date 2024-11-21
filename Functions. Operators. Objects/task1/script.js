"use strict";


window.onload = main;
document.write = writeText;


const BUTTONS = {
	"Задание №1": task1,
	"Задание №2": task2,
	"Задание №3": task3,
	"Задание №4a": task4a,
	"Задание №4b": task4b,
	"Задание №5a": task5a,
	"Задание №5b": task5b,
	"Задание №6": task6,
	"Задание №7": task7,
	"Задание №8": task8
}


const divide = (lhs, rhs) => {
	if (rhs == 0) {
		throw new ZeroDivisionError("Division by zero");
	} else {
		return lhs / rhs;
	}
}


const getRandom = () => {
	return Math.floor(Math.random() * 10);
}


class ZeroDivisionError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.name = "ZeroDivisionError";
		this.message = value;
	}
}


function main() {
	createTaskButtons();
	createOutputEntry();
}


function writeText(text) {
	if (text == "<br>") return; 
	let entry = document.querySelector("#output");
	entry.value += text.replaceAll("<br>", "") + "\n";
}


function createTaskButtons() {
	let wrapper = document.createElement("div");
	wrapper.classList.add("buttons-wrapper");
	document.body.appendChild(wrapper);

	let entries = Object.entries(BUTTONS);
	for (let value of entries) {
		let title = value[0];
		let func = value[1];

		let button = document.createElement("button");
		button.classList.add("task-button");
		button.innerText = title;
		button.onclick = () => {
			func();
			writeText("-------------------------------------------------------------------");
		}
		wrapper.appendChild(button);
	}
}


function createOutputEntry() {
	let wrapper = document.createElement("div");
	wrapper.classList.add("output-wrapper");
	document.body.appendChild(wrapper);

	let entry = document.createElement("textarea");
	entry.classList.add("output-entry");
	entry.id = "output";
	wrapper.appendChild(entry);
}


function task1() {
	alert("Приветствуем вас на конкурсе для настоящих программистов!");

	let isContinue = confirm("Хотите зарегистрироваться?");

	if (isContinue) {
		let firstName = prompt("Введите ваше имя");
		let lastName = prompt("Введите вашу фамилию");

		alert(`Добро пожаловать на конкурс, ${lastName} ${firstName}!`);
	} else {
		alert("До свидания!");
	}
}


function task2() {
	console.log(12 + 13);
	console.log("4" + "5");
	document.write(6 + "7");
	document.write("9" + 0);
	alert("Результатом сложения строки и числа всегда будет строка");
}


function task3() {
	let x = 31.65, 
		y = 689;

	let result1 = 125*(x + y)/x*y + 16;
	let result2 = (5*y - 52*x)*3 - 145;
	let modulo = result1 % result2;

	let text = (
`Значение первого выражения - ${result1}
Значение второго выражения - ${result2}
Остаток от деления значения одного выражения на значение другого равен ${modulo}`
	);

	document.write(text);
	alert(text);
}


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


function task7() {
	let binary = 0b1110;
	let octal = 0O11;
	let hex = 0xB;

	document.write(`Число в двоичной системе счисления: ${binary}`);
	document.write(`Число в восьмеричной системе счисления: ${octal}`);
	document.write(`Число в шеснадцатиричной системе счисления: ${hex}`);
}


function task8() {
	let lhs = Number.parseFloat(prompt("Введите первое число"));
	let rhs = Number.parseFloat(prompt("Введите второе число"));

	if ((!lhs && lhs != 0) || (!rhs && rhs != 0)) {
		alert("Вы ввели не число!");
		return;
	}

	try {
		let result = divide(lhs, rhs);
		alert(`${lhs} / ${rhs} = ${result}`);
	} catch (error) {
		switch (error.name) {
			case ZeroDivisionError.name:
				alert("На ноль делить нельзя!");
				break;
			default:
				throw error;
		}
	}
}
