const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("db", {
    getAllUsers: () => ipcRenderer.invoke("get-all-users"),
    getUser: () => ipcRenderer.invoke("get-user"),
  getUserByNationalId: (d) => ipcRenderer.invoke("get-user-by-national-id", d),
  createUser: (d) => ipcRenderer.invoke("create-user", d),
  updateUser: () => ipcRenderer.invoke("update-user"),
  removeUser: (d) => ipcRenderer.invoke("remove-user", d),

  issueCheck: (d) => ipcRenderer.invoke("issue-check", d),
});
