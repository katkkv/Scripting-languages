"use strict";


let fio = "Турчинович Никита Александрович";
let fioLength = fio.length;

let fioUpper = fio.toUpperCase();
let fioLower = fio.toLowerCase();

let newStr = fio + " " + fioUpper + " " + fioLower;
let newStrReplaced = newStr.replace(fio, "ТНА");

console.log(fio);
console.log(fioUpper);
console.log(fioLower);
console.log(fioLength);
console.log(newStr);
console.log(newStrReplaced);
