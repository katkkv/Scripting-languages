'use strict';


window.onload = main;


let dragableElement = null;


function dragStart() {
	if (dragableElement) return;

	dragableElement = this;
	dragableElement.style.position = "absolute";
	dragableElement.style.pointerEvents = "none";

	event.stopPropagation();
}


function move() {
	if (!dragableElement) return;

	dragableElement.style.top = `${event.clientY}px`;
	dragableElement.style.left = `${event.clientX}px`;
}


function dragEnd() {
	if (!dragableElement) return;

	dragableElement.style.pointerEvents = null;
	dragableElement = null;
}


function main() {
	document.onmousemove = move;
	document.ondblclick = dragEnd;

	Array.from(document.getElementsByClassName("dragable")).map(
		element => {
			element.ondblclick = dragStart;
		}
	);
}
