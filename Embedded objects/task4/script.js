"use strict";


const methods = ["pow", "pop", "push", "shift", "round", "floor", "slice", "sort"];

let arrayMethods = new Array(),
	mathMethods = new Array();

for (let method of methods) {
	if (method in new Array()) {
		arrayMethods.push(method);
	}
	if (method in Math) {
		mathMethods.push(method);
	}
}

arrayMethods.unshift("at");
mathMethods.push("abs");

console.log(`Первоначальный массив: ${methods.toString()} (${methods.length} элементов)`);
console.log(`Методы объекта Array: ${arrayMethods.toString()} (${arrayMethods.length} элементов)`);
console.log(`Методы объекта Math: ${mathMethods.toString()} (${mathMethods.length} элементов)`);
