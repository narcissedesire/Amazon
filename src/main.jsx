import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "font-awesome/css/font-awesome.min.css"
import "./fontawesome/css/all.min.css"
import Navbar from './Component/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
)
