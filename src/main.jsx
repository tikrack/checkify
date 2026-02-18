import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(<Router/>)

window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
