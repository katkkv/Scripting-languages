'use strict';


let printBtn = document.getElementById("printBtn");
printBtn.onclick = printData;


const FIELDS = [
	"firstName",
	"lastName",
	"patronymic",
	"age",
	"sex",
	"phone",
	"email",
	"login",
	"password",
	"passwordRepeat",
]


function printData() {
	let form = document.forms[0];

	if (!form.checkValidity()) {
		return alert("Заполните форму!");
	}

	let user = {};
	for (let field of FIELDS) {
		user[field] = form.elements[field].value.trim();
	}

	if (user.password !== user.passwordRepeat) {
		return alert("Пароли не совпадают!");
	}

	console.log(`Зарегистрирован новый пользователь: ${user.login}, ${user.age}, ${user.sex} [${user.password}]`);

	let output = document.createElement("div");
	let header = document.createElement("h2");
	let paragraph = document.createElement("p");

	output.classList.add("output");
	header.innerText = "Вы успешно зарегистрировались!"
	paragraph.innerText = `
		${user.lastName} ${user.firstName} ${user.patronymic}, в скором времени мы отправим вам сообщение на почту ${user.email} или позвоним по телефону ${user.phone}
	`.trim();

	output.appendChild(header);
	output.appendChild(paragraph);
	document.querySelector(".wrapper").appendChild(output);
}
