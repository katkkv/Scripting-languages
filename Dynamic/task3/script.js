'use strict';


window.onload = main;


const e = Math.E;
const pi = Math.PI;
const abs = Math.abs;
const sqrt = Math.sqrt;
const exp = Math.exp;

const ln = Math.log;
const log2 = Math.log2;
const log10 = Math.log10;

const sin = Math.sin;
const cos = Math.cos;
const tg = Math.tan;
const ctg = x => 1 / tg(x);
const arcsin = Math.asin;
const arccos = Math.acos;
const arctg = Math.atan;
const arcctg = x => Math.PI / 2 - arctg(x); 


function GraphCanvas(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.scaleX = 10;
	this.scaleY = 10;
	this.step = 0.001;
	this.width = canvas.width;
	this.height = canvas.height;
	this.minX = -this.width/2;
	this.maxX = this.width/2;
	this.minY = -this.height/2;
	this.maxY = this.height/2;


	this.getColor = () => this.context.fillStyle;

	this.setColor = (color) => this.context.fillStyle = color;

	this.setScale = (x, y) => {this.scaleX = x; this.scaleY = y};

	this.setStep = (step) => this.step = step;

	this.drawPixel = (x, y) => this.context.fillRect(x, y, 1, 1);


	this.plot = (func) => {
		for (let x = this.minX; x <= this.maxX; x += this.step) {
			this.drawPixel(
				x * this.scaleX, 
				func(x) * this.scaleY
			);
		}
	}


	this.clear = () => {
		this.context.clearRect(this.minX, this.minY, this.width, this.height);
		this.renderAxis();
	}


	this.renderAxis = () => {
		let color = this.getColor();
		this.setColor("#000000");

		for (let x = this.minX; x <= this.maxX; x++) {
			this.drawPixel(x, 0);
		}
		for (let y = this.minY; y <= this.maxY; y++) {
			this.drawPixel(0, y);
		}
		for (let i = 1; i < 10; i++) {
			this.drawPixel(i, this.maxY-i);
			this.drawPixel(-i, this.maxY-i);
			this.drawPixel(this.maxX-i, i);
			this.drawPixel(this.maxX-i, -i);
		}

		this.setColor(color);
	}
}


function prepareCanvas() {
	let canvas = document.getElementById("canvas");
	let width = +document.getElementById("width").value;
	let height = +document.getElementById("height").value;
	let context = canvas.getContext("2d");

	canvas.height = height;
	canvas.width = width;

	context.reset();
	context.translate(canvas.width/2, canvas.height/2);
	context.rotate(Math.PI);
	context.scale(-1, 1);

	new GraphCanvas(canvas).renderAxis();
}


function plot() {
	let canvas = new GraphCanvas(document.getElementById("canvas"));
	let color = document.getElementById("color").value;
	let scaleX = +document.getElementById("scaleX").value;
	let scaleY = +document.getElementById("scaleY").value;
	let step = +document.getElementById("step").value;
	let strFunc = document.getElementById("function").value;

	if (!strFunc) {return alert("Укажите функцию!");}

	const func = (x) => eval(strFunc);

	canvas.setColor(color);
	canvas.setScale(scaleX, scaleY);
	canvas.setStep(step);
	
	canvas.plot(func);
}


function clear() {
	let canvas = new GraphCanvas(document.getElementById("canvas"));
	canvas.clear();
}


function radioInput() {
	document.getElementById("function").value = this.value;
}


function entryInput() {
	Array.from(document.getElementsByName("func")).map(
		element => {
			element.checked = false;
		}
	);
}


function main() {
	prepareCanvas();

	document.getElementById("submit").onclick = plot;
	document.getElementById("reset").onclick = clear;

	document.getElementById("function").oninput = entryInput;

	Array.from(document.getElementsByName("size")).map(
		element => {
			element.oninput = prepareCanvas;
		}
	)

	Array.from(document.getElementsByName("func")).map(
		element => {
			element.oninput = radioInput;
		}
	);
}
