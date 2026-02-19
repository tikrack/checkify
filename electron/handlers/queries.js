const {ipcMain} = require("electron");
const usersAction = require("../actions/users.js")

const queryHandler = () => {
    ipcMain.handle("get-all-users", async () => usersAction.getAll())
    ipcMain.handle("get-user", async (_, d) => usersAction.get())
    ipcMain.handle("create-user", async (_, d) => usersAction.create(d))
    ipcMain.handle("update-user", async (_, d) => usersAction.update())
    ipcMain.handle("remove-user", async (_, d) => usersAction.remove())
}

module.exports = queryHandler;