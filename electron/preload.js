const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("db", {
    getChecks: () => ipcRenderer.invoke("get-checks")
});
