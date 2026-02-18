import {BrowserWindow, app} from "electron"
import * as path from "node:path";

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadURL("http://localhost:3000")
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})