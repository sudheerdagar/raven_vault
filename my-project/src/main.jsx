import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<Navbar/>} />
      </Routes>
    </Router> */}
    <App/>
  </React.StrictMode>,
)
