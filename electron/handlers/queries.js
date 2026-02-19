const {ipcMain} = require("electron");
const checksAction = require("../actions/checks.js")

const queryHandler = () => {
    ipcMain.handle("get-checks", async () => checksAction.getAll())
}

module.exports = queryHandler;