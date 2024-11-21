"use strict";


let arr = new Array();

arr[0] = 6 - Math.PI**2 + 3 * Math.E**8;
arr[1] = 2 * Math.cos(4) + Math.cos(12) + 8 - Math.E**3;
arr[2] = 3 * Math.sin(9) + Math.log(5);
arr[3] = 2 * Math.tan(5) + 6 - Math.PI + Math.sqrt(12);

let max = Math.max(...arr),
	min = Math.min(...arr);

let maxIndex = arr.indexOf(max),
	minIndex = arr.indexOf(min);

console.log(`Полученный массив: ${arr.toString()}`);
console.log(`Максимальный элемент ${max} с индексом ${maxIndex}`);
console.log(`Минимальный элемент ${min} с индексом ${minIndex}`);
