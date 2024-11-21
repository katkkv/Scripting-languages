"use strict";


window.onload = main;


function main() {
	//		Задание №1
	console.log("\tЗадание №1");
	for (let i = 0; i < document.all.length; i++) {
		console.log(`${i}. ${document.all[i].tagName}`);
	}

	//		Задание №2
	console.log("\tЗадание №2");
	console.log("Body", document.body.childNodes);
	console.log("div.wrapper", document.querySelector(".wrapper").childNodes);

	//		Задание №3
	console.log("\tЗадание №3");
	for (let element of document.all) {
		if (element.tagName === "SPAN") {
			console.log(
				"Используя коллекцию all:",
				element.innerText
			);
			break;
		}
	}
	console.log(
		"Используя коллекцию span:",
		document.getElementsByTagName("span")[0].innerText
	);
	console.log(
		"Используя идентификатор:",
		document.getElementById("firstSpan").innerText
	);

	// Задание №4
	let table = document.getElementById("task4table");
	let rows = table.querySelectorAll("tr");
	let totalPriceVAT = 0, totalPriceNoVAT = 0;
	for (let row of rows) {
		let tds = Array.from(row.querySelectorAll("td"));
		if (tds.length === 0) continue;
		totalPriceNoVAT += Number.parseInt(tds.at(-1).innerText);
		totalPriceVAT += Number.parseInt(tds.at(-2).innerText);
	}

	let row = document.createElement("tr");
	let title = document.createElement("th");
	title.innerText = "Итого";
	title.setAttribute("colspan", "2");
	row.appendChild(title);
	title = document.createElement("th");
	title.innerText = totalPriceVAT;
	row.appendChild(title);
	title = document.createElement("th");
	title.innerText = totalPriceNoVAT;
	row.appendChild(title);
	table.appendChild(row);
}
