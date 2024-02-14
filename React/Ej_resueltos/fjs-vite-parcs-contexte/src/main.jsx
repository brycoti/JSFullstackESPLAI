import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from './App'
import Inici from "./Inici";
import Parc from './Parc';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Inici />} />
          <Route path="/parc/:nom" element={<Parc />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
