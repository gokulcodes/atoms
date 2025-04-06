import { StrictMode } from "react"
import ReactDOM from 'react-dom/client' // used to interact with Real DOM for updating, deleting DOM nodes by compare the virtual DOM created by react package
import App from "./src/pages/App"
import "./styles/main.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Demo from '@/pages/Demo'

const root = document.getElementById('root')

ReactDOM
.createRoot(root)
.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/component/:id" element={<Demo />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
