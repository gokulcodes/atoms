import React from "react"; // used to create Virtual DOM for the component
import ReactDOM from 'react-dom/client' // used to interact with Real DOM for updating, deleting DOM nodes by compare the virtual DOM created by react package
import App from "./App"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
