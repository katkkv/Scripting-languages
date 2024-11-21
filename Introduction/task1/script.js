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


task1();
