const { ipcMain } = require("electron");
const usersAction = require("../actions/users.js");
const checksAction = require("../actions/checks.js");

const queryHandler = () => {
  ipcMain.handle("get-all-users", async () => usersAction.getAll());
  ipcMain.handle("get-user", async (_, d) => usersAction.get());
  ipcMain.handle("get-user-by-national-id", async (_, d) =>
    usersAction.getByNationalId(d),
  );
  ipcMain.handle("create-user", async (_, d) => usersAction.create(d));
  ipcMain.handle("update-user", async (_, d) => usersAction.update());
  ipcMain.handle("remove-user", async (_, d) => usersAction.remove(d));


  ipcMain.handle("issue-check", async (_, d) => checksAction.issue(d));
};

module.exports = queryHandler;
