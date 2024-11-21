"use strict";


window.onload = main;


const calculateCircleArea = (radius) => Math.PI * radius**2;

const calculateCircumference = (radius) => 2 * Math.PI * radius;

const round = (number, digits) => Math.round(number * 10**digits) / 10**digits;


function main() {
	let initialRadius = Number.parseFloat(prompt("Введите начальное значение радиуса окружности"));
	let endRadius = Number.parseFloat(prompt("Введите конечное значение радиуса окружности"));

	if (isNaN(initialRadius) || isNaN(endRadius)) {
		alert("Некорректные данные!");
		return;
	}

	let table = createCircleTable(initialRadius, endRadius);
	document.body.appendChild(table);
}


function createCircleTable(initialRadius, endRadius) {
	let table = document.createElement("table");
	
	let thead = createRow("Радиус", "Площадь круга", "Длина окружности");
	thead.classList.add("head");
	table.appendChild(thead);

	let radius = initialRadius;
	do {
		let area = calculateCircleArea(radius);
		let circumference = calculateCircumference(radius);
		table.appendChild(createRow(radius, round(area, 2), round(circumference, 2)));
		radius = round(radius + .3, 1);
	} while (radius < endRadius);
	table.appendChild(createRow(endRadius, calculateCircleArea(endRadius), calculateCircumference(endRadius)));

	return table;
}


function createRow(...values) {
	let tr = document.createElement("tr");

	for (let value of values) {
		let td = document.createElement("td");
		tr.appendChild(td)

		td.innerText = value;
	}

	return tr;
}
