"use strict"


const round = (number, digits) => Math.round(number * 10**digits) / 10**digits;


function returnFive() {
	return 5;
}


function Group(name, studentsNumber) {
	this.name = name;
	this.studentsNumber = studentsNumber;

	this.subStud = (count) => {
		this.studentsNumber -= count;
		console.log(`Из группы '${this.name}' исключено ${count} студентов.`);
		return this.studentsNumber;
	}

	this.addStud = (count) => {
		this.studentsNumber += count;
		console.log(`В группу '${this.name}' добавлено ${count} студентов.`);
		return this.studentsNumber;
	}
}


function Student(firstName, lastName, patronymic, groupName, phys, math, cs) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.patronymic = lastName;
	this.groupName = groupName;
	this.phys = phys;
	this.math = math;
	this.cs = cs;

	this.getFullName = () => {
		return `${this.lastName} ${this.firstName} ${this.patronymic}`;
	}

	this.getAverange = () => {
		return round((this.phys + this.math + this.cs) / 3, 2);
	}

	this.toString = () => {
		return `Студент ${this.getFullName()} из группы '${this.groupName}' с баллом ${this.getAverange()}`;
	}
}


function main() {
	//			Задание №1
	console.log("\t\t\tЗадание №1");
	let gr2 = new Group("ИСиТ 2", 30);
	let gr3 = new Group("ИСиТ 3", 30);
	let gr4 = new Group("ПОИТ 4", 30);
	gr2.subStud(11);
	gr3.addStud(6);
	gr4.addStud(5);
	console.log(`Количество студентов в группе '${gr2.name}': ${gr2.studentsNumber}`);
	console.log(`Количество студентов в группе '${gr3.name}': ${gr3.studentsNumber}`);
	console.log(`Количество студентов в группе '${gr4.name}': ${gr4.studentsNumber}`);

	//			Задание №2
	console.log("\t\t\tЗадание №2");
	let student1 = new Student("Никита", "Турчинович", "Александрович", "ИСиТ 2", 10, 9, 10);
	let student2 = new Student("Евгений", "Янукович", "Дмитриевич", "ДЭиВИ 10", 10, 10, 10);
	let student3 = new Student("Владимир", "Филимонов", "Максимович", "ПОИБМС 7", 9, 8, 9);
	Student.prototype.faculty = "ФИТ";
	console.log(student1.toString());
	console.log(student2.toString());
	console.log(student3.toString());
	console.log(`Факультет: ${student1.faculty}`);

	//			Задание №3
	console.log("\t\t\tЗадание №3");
	let str1 = "Турчинович Никита Александрович";
	let str2 = new String("Турчинович Никита Александрович");
	let arr = ["Array", "Math", "Date", "String"];

	//	delete
	console.log("\tdelete");
	console.log(`Исходный массив: ${arr}`);
	delete arr[2];
	console.log(`Массив после удаления элемента: ${arr}`);

	//	in
	console.log("\tin");
	console.log("Есть ли второй элемент в массиве:", 1 in arr);
	console.log("Есть ли третий элемент в массиве:", 2 in arr);
	console.log("Есть ли свойство 'name' у объекта 'gr2':", "name" in gr2);
	console.log("Есть ли свойство 'math' у объекта 'gr3':", "math" in gr3);
	console.log("Есть ли свойство 'getAverange' у объекта 'student1':", "getAverange" in student1);
	console.log("Есть ли свойство 'dateOfBirthday' у объекта 'student3':", "dateOfBirthday" in student3);

	//	instanceof
	console.log("\tinstanceof");
	console.log("gr3 instanceof Group:", gr3 instanceof Group);
	console.log("student2 instanceof Object:", student2 instanceof Object);
	console.log("arr instanceof Array:", arr instanceof Array);
	console.log("str1 instanceof String:", str1 instanceof String);
	console.log("str2 instanceof String:", str2 instanceof String);

	//	typeof
	console.log("\ttypeof");
	// Объекты
	console.log("typeof gr3:", typeof gr3);
	console.log("typeof student3:", typeof student3);
	console.log("typeof str1:", typeof str1);
	console.log("typeof str2:", typeof str2);
	console.log("typeof arr:", typeof arr);
	console.log("typeof returnFive:", typeof returnFive);
	// Поля Объектов Group, Student
	console.log("typeof gr2.name:", typeof gr2.name);
	console.log("typeof gr2.studentsNumber:", typeof gr2.studentsNumber);
	console.log("typeof gr2.addStud:", typeof gr2.addStud);
	console.log("typeof gr2.subStud:", typeof gr2.subStud);
	console.log("typeof student1.firstName:", typeof student1.firstName);
	console.log("typeof student1.lastName:", typeof student1.lastName);
	console.log("typeof student1.patronymic:", typeof student1.patronymic);
	console.log("typeof student1.groupName:", typeof student1.groupName);
	console.log("typeof student1.phys:", typeof student1.phys);
	console.log("typeof student1.math:", typeof student1.math);
	console.log("typeof student1.cs:", typeof student1.cs);
	console.log("typeof student1.getFullName:", typeof student1.getFullName);
	console.log("typeof student1.getAverange:", typeof student1.getAverange);
}


main();
