import ReactDOM from 'react-dom/client' // used to interact with Real DOM for updating, deleting DOM nodes by compare the virtual DOM created by react package
import App from "./App"

const root = document.getElementById('root')

ReactDOM
.createRoot(root)
.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
