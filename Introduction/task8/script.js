class ZeroDivisionError extends Error {
	constructor(value, ...params) {
		super(...params);
		this.name = "ZeroDivisionError";
		this.message = value;
	}
}


function divide(lhs, rhs) {
	if (rhs == 0) {
		throw new ZeroDivisionError("Division by zero");
	} else {
		return lhs / rhs;
	}
}


function task8() {
	let lhs = Number.parseFloat(prompt("Введите первое число"));
	let rhs = Number.parseFloat(prompt("Введите второе число"));

	if ((!lhs && lhs != 0) || (!rhs && rhs != 0)) {
		alert("Вы ввели не число!");
		return;
	}

	try {
		let result = divide(lhs, rhs);
		alert(`${lhs} / ${rhs} = ${result}`);
	} catch (error) {
		switch (error.name) {
			case ZeroDivisionError.name:
				alert("На ноль делить нельзя!");
				break;
			default:
				throw error;
		}
	}
}


task8();
