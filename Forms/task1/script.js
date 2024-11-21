'use strict';


let printButton = document.getElementById("print");
printButton.onclick = printData; 


function printData() {
	let form = document.forms[0];

	if (!form.checkValidity()) {
		return alert("Заполните форму!");
	}

	let faculty = form.elements[0].value.trim();
	let firstName = form.elements.firstName.value.trim();
	let lastName = form.elements.lastName.value.trim();
	let speciality = form.elements.speciality.value.trim();
	let course = form.elements.course.value.trim();
	let subjects = form.elements.subject;

	let header = document.createElement("h3");
	let paragraph = document.createElement("p");
	let list = document.createElement("ul");

	header.innerText = faculty;
	paragraph.innerText = `
		Студент ${lastName} ${firstName} специальность ${speciality} курс ${course} должен сдавать следующие предметы:
	`.trim();

	for (let subject of subjects) {
		if (!subject.checked) continue;
		
		let listItem = document.createElement("li");
		listItem.innerText = subject.value;
		list.appendChild(listItem);
	}

	let output = document.createElement("div");
	output.classList.add("output");

	output.appendChild(header);
	output.appendChild(paragraph);
	output.appendChild(list);

	document.querySelector(".wrapper").appendChild(output);
}
