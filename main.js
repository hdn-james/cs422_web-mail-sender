const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	const window = new BrowserWindow({
		width: 1270,
		height: 720,
		fullscreen: false,
		resizable: false,
		titleBarStyle: "hidden",
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});
	window.loadFile("index.html");
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length() === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform != "darwin") {
		app.quit();
	}
});
