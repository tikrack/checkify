const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("db", {
    getAllUsers: () => ipcRenderer.invoke("get-all-users"),
    getUser: () => ipcRenderer.invoke("get-user"),
    createUser: () => ipcRenderer.invoke("create-user"),
    updateUser: () => ipcRenderer.invoke("update-user"),
    removeUser: () => ipcRenderer.invoke("remove-user"),
});
