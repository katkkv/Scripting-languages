'use strict';


window.onload = main;


const OBJECTS_PROPERTIES = [
	ObjectProperties(
		navigator, 
		"userAgent",
		"appVersion",
		"appName",
		"appCodeName",
		"platform",
		"javaEnabled"
	),
	ObjectProperties(
		screen,
		"width",
		"height",
		"colorDepth"
	),
	ObjectProperties(
		history,
		"length"
	),
	ObjectProperties(
		location,
		"href",
		"pathname",
		"host"
	)
]


function ObjectProperties(object, ...properties) {
	return {
		object,
		properties
	}
}


function main() {
	let table = document.createElement("table");
	document.body.appendChild(table);

	table.appendChild(createRow("Свойство", "Значение"));

	for (let {object, properties} of OBJECTS_PROPERTIES) {
		for (let propertyName of properties) {
			let property;
			if (typeof object[propertyName] == "function") {
				property = object[propertyName]();
				propertyName += "()";
			} else {
				property = object[propertyName];
			}
			table.appendChild(createRow(
				`${object.constructor.name}.${propertyName}`,
				decodeURI(property)
			));
		}
	}
}


function createRow(...values) {
	let tr = document.createElement("tr");
	for (let value of values) {
		let td = document.createElement("td");
		td.innerText = value;
		tr.appendChild(td);
	}
	return tr;
}
