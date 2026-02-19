const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("db", {
    getAllChecks: () => ipcRenderer.invoke("get-all-checks")
});
