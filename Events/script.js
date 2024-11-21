'use strict';


window.onload = main;


const IMAGES = [
	"fit.jpg",
	"belstu.png",
	"cat.jpg",
]


// Изменить цвет элемента
function changeColor() {
	this.style.color = "red";
}


// Вернуть цвет элемента к начальному
function resetColor() {
	this.style.color = null;
}


// Увеличить размер текста
function increaseFontSize() {
	let fontSize = Number.parseInt(this.style.fontSize) || 16;
	fontSize += 1;
	this.style.fontSize = `${fontSize}px`;
}


// Уменьшить размер текста
function reduceFontSize() {
	event.preventDefault();
	let fontSize = Number.parseInt(this.style.fontSize) || 16;
	fontSize -= 1;
	this.style.fontSize = `${fontSize}px`;
}


// Заменить изображение
function changeImage() {
	let src = this.getAttribute("src").split("/").at(-1);
	let newSrcIndex = (IMAGES.indexOf(src) + 1) % IMAGES.length;
	let newSrc = IMAGES.at(newSrcIndex);
	this.setAttribute("src", `assets/${newSrc}`);
}


// Заменить содержимое изображением
function replaceText() {
	this.innerHTML = "<img src='assets/belstu-building.jpg'>"
}


// Увеличить размер элемента
function increaseSize() {
	this.style.width = "400px";
}


// Вернуть исходный размер элемента
function resetSize() {
	this.style.width = null;
}


// Добавить границу элементу
function addBorder() {
	this.style.border = "3px solid lightgreen";
}


function main() {
	Array.from(document.getElementsByTagName("span")).map(
		element => {
			element.onmouseover = changeColor;
			element.onclick = increaseFontSize;
			element.oncontextmenu = reduceFontSize;
			element.onmouseout = resetColor;
		}
	);

	document.getElementById("changeableImg").onclick = changeImage;
	document.getElementById("changeableText").onclick = replaceText;

	Array.from(document.getElementsByTagName("img")).map(
		element => {
			element.onmouseover = increaseSize;
			element.onmouseout = resetSize;
		}
	);

	Array.from(document.getElementsByTagName("p")).map(
		element => {
			element.ondblclick = addBorder;
		}
	);
}
