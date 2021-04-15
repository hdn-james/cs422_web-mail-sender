var app = require("electron").remote;
var dialog = app.dialog;
var fs = require("fs");

// Writing the file

document.getElementById("save").onclick = () => {
	dialog.showSaveDialog({ defaultPath: "`/Desktop/new.txt" }, (fileName) => {
		if (fileName === undefined) {
			alert("Not saved.");
			return;
		}
		var content = document.getElementById("maintext").value;
		fs.writeFile(fileName, content, (err) => {
			if (err) console.log(err);
			alert("File saved");
		});
	});
};

// Reading the file

document.getElementById("open").onclick = () => {
	dialog.showOpenDialog((fileNames) => {
		if (fileNames === undefined) {
			alert("No Files Selected.");
		} else {
			readFile(fileNames[0]);
		}
	});
};

function readFile(filepath) {
	fs.readFile(filepath, "utf-8", (err, data) => {
		if (err) {
			alert("Error Occured");
			return;
		}
		var textArea = document.getElementById("maintext");
		textArea.value = data;
	});
}

document.getElementById("new").onclick = () => {
	window.location.reload();
};
