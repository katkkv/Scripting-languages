"use strict";


window.onload = main;


const MONTHS = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const DAYS = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]


function main() {
	let dateData = getDate();
	
	let rows = document.querySelectorAll("tr");
	for (let i = 0; i < rows.length; i++) {
		let td = rows[i].querySelector("td");
		td.innerText = dateData[i];
	}
}


function getDate() {
	let date = new Date();

	let year = date.getFullYear(),
		monthNumber = date.getMonth(),
		dayNumber = date.getDay(),
		hour = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	let monthStr = MONTHS.at(monthNumber),
		dayStr = DAYS.at(dayNumber);

	return [year, monthStr, dayStr, hour, minutes, seconds];
}
