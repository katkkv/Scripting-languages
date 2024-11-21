"use strict";


window.onload = main;


function main() {
	let rows = Number.parseInt(prompt("Введите число строк"));
	let cols = Number.parseInt(prompt("Введите число столбцов"));

	if (!rows || !cols) {
		alert("Некорректные данные!");
		return;
	}

	createMultTable(rows, cols);
}


function createMultTable(rows, cols) {
	let table = document.createElement("table");
	document.body.appendChild(table);

	for (let row = 1; row <= rows; row++) {
		let tr = document.createElement("tr");
		table.appendChild(tr);

		for (let col = 1; col <= cols; col++) {
			let td = document.createElement("td");
			tr.appendChild(td);

			td.innerText = row*col;
		}
	}
}
