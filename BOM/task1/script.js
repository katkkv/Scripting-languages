'use strict';


window.onload = main;


var windowsCount = 1;
var openedWindows = [];


function createButton(text, callbackFunction) {
	let button = document.createElement("button");
	button.innerText = text;
	button.onclick = callbackFunction;
	return button;
}


function getCloseWindowCb(window) {
	return function() {
		openedWindows = openedWindows.filter(
			w => w.document.title !== window.document.title
		);
		window.close();
	}
}


function openWindow() {
	let newWindow = window.open();
	let closeWindow = getCloseWindowCb(newWindow);
	
	newWindow.onunload = closeWindow;
	newWindow.document.title = `Window#${windowsCount}`;

	newWindow.document.body.appendChild(createButton(
		"Закрыть окно",
		closeWindow,
	));

	windowsCount++;
	openedWindows.push(newWindow);
}


function writeToAllWindows() {
	let text = prompt("Введите текст");
	for (let window of openedWindows) {
		window.alert(
			`${window.document.title}: ${text}`
		);
	}
}


function main() {
	document.body.appendChild(createButton(
		"Создать окно",
		openWindow
	));
	document.body.appendChild(createButton(
		"Во все окна",
		writeToAllWindows
	));
}
