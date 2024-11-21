'use strict';


window.onload = main;


function move({object, func, callback, startX = 0, startY = 0, endX = NaN, endY = NaN, step = 5, speed = 10}) {
	object.style.position = "absolute";
	object.style.top = `${startY}px`;
	object.style.left = `${startX}px`;

	let id = setInterval(() => {
		let x = Number.parseInt(object.style.left) + step;
		let y = func(x);

		object.style.top = `${y}px`;
		object.style.left = `${x}px`;
		
		if (Math.abs(endX - x) < Math.abs(step) || Math.abs(endY - y) < Math.abs(step)) {
			clearInterval(id);
			if (callback) {
				callback(object);
			}
		} 
	}, speed)

	return id;
}



function straightMove(object) {
	return move({
		object: object,
		func: x => x/3 + 100,
		endX: screen.availWidth - 300,
		endY: screen.availHeight - 350,
	});
}


function reversedMove(object) {
	return move({
		object: object,
		func: x => x/2 - 100,
		startX: screen.availWidth - 300,
		startY: screen.availHeight - 350,
		endX: 0,
		endY: 0,
		step: -5,
		speed: 7,
	});
}


function sinMove(object) {
	return move({
		object: object,
		func: x => Math.sin(Math.sqrt(x / 10)) * 100 + 100,
		callback: object => object.style.position = null,
		startY: 100,
		endX: screen.availWidth - 300,
		speed: 5,
	});
}


function cosReversedMove(object) {
	return move({
		object: object,
		func: x => Math.cos(Math.sqrt(x / 10)) * 100 + 400,
		startX: screen.availWidth - 300,
		startY: 400,
		endX: 0,
		step: -5,
	});
}


function main() {
	let straightMoveImg = document.getElementById("straightMoveImg");
	let reversedMoveImg = document.getElementById("reversedMoveImg");
	let sinMoveImg = document.getElementById("sinMoveImg");
	let cosReversedMoveImg = document.getElementById("cosReversedMoveImg");

	straightMove(straightMoveImg);
	reversedMove(reversedMoveImg);
	sinMove(sinMoveImg);
	cosReversedMove(cosReversedMoveImg);
}
