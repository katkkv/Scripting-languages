"use strict";


window.onload = main;


const methods = [
	Method(
		"toExponential(1)",
		"Строковое представление числа в экспоненциальной форме с указанием одной цифры после запятой.",
		(number) => number.toExponential(1)
	),
	Method(
		"toFixed(3)",
		"Строковое представление числа в форме с тремя цифрами после запятой.",
		(number) => number.toFixed(3)
	),
	Method(
		"toPrecision(3)",
		"Строковое представление числа в экспоненциальной форме с общим указанием трех цифр до и после запятой.",
		(number) => number.toPrecision(3)
	),
	Method(
		"toString(8)",
		"Строковое представление числа в 8-ричной системе счисления.",
		(number) => number.toString(8)
	)
];


function Method(name, description, func) {
	return {
		name: name,
		description: description,
		execute: func
	}
}


function main() {
	let first_number = 3671.19;
	let second_number = 92118;

	let table = createTable(first_number, second_number);
	document.body.appendChild(table);
}


function createTable(...numbers) {
	let table = document.createElement("table");

	let thead = createRow("Число", "Метод", "Результат", "Описание метода");
	thead.classList.add("head");
	table.appendChild(thead);

	for (let number of numbers) {
		for (let method of methods) {
			table.appendChild(createRow(number, method.name, method.execute(number), method.description));
		}
	}

	return table;
}


function createRow(...values) {
	let tr = document.createElement("tr");

	for (let value of values) {
		let td = document.createElement("td");
		tr.appendChild(td);

		td.innerText = value;
	}

	return tr;
}
