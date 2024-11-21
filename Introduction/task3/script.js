function task3() {
	let x = 31.65, 
		y = 689;

	let result1 = 125*(x + y)/x*y + 16;
	let result2 = (5*y - 52*x)*3 - 145;
	let modulo = result1 % result2;

	let text = (
`Значение первого выражения - ${result1}
<br>
Значение второго выражения - ${result2}
<br>
Остаток от деления значения одного выражения на значение другого равен ${modulo}`
	);

	document.write(text);
	alert(text.replaceAll("<br>\n", ""));
}


task3();
