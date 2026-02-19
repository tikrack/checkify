const {ipcMain} = require("electron");
const usersAction = require("../actions/users.js")

const queryHandler = () => {
    ipcMain.handle("get-all-users", async () => usersAction.getAll())
    ipcMain.handle("get-user", async () => usersAction.get())
    ipcMain.handle("create-user", async () => usersAction.create())
    ipcMain.handle("update-user", async () => usersAction.update())
    ipcMain.handle("remove-user", async () => usersAction.remove())
}

module.exports = queryHandler;