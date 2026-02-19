const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("db", {
    getAllUsers: () => ipcRenderer.invoke("get-all-users"),
    getUser: () => ipcRenderer.invoke("get-user"),
    createUser: (data) => ipcRenderer.invoke("create-user", data),
    updateUser: () => ipcRenderer.invoke("update-user"),
    removeUser: () => ipcRenderer.invoke("remove-user"),
});
