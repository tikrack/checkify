import {contextBridge} from "electron";


contextBridge.exposeInMainWorld('test', {
    doAThing: () => {
        console.log("Salammmmm")
    }
})