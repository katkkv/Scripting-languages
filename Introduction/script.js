const partialTasks = {
	4: [
		"a",
		"b"
	],
	5: [
		"a",
		"b"
	]
}


function init() {
	tasksLink = document.querySelector("#tasks-link");
	tasksLink.target = "_blank";
	tasksLink.href = window.location.href.replace("index.html", "") + "Задание.pdf";
}


function addLink(taskNumber) {
	link = document.createElement("a");
	link.innerText = `Задание ${taskNumber}`;
	link.href = window.location.href.replace("index.html", "") + `/task${taskNumber}/index.html`;
	link.target = "_blank";
	linksDiv.appendChild(link);
}


init();

let linksDiv = document.querySelector(".task-links");
for (let i = 1; i <= 8; i++) {
	let parts = partialTasks[i];
	if (parts) {
		for (part of parts) {
			addLink(`${i}${part}`);
		}
	} else {
		addLink(i);
	}
}