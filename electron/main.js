const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const knex = require("./db/db.js");

const queryHandler = require("./handlers/queries.js");

const isDev = !app.isPackaged;

queryHandler();

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    if (isDev) {
        win.loadURL("http://localhost:5173");
    } else {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
    }

    (async () => {
        await knex.migrate.latest();
    })();

    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
