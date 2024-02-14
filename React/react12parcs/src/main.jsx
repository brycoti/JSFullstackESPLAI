import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import dadesParcs from './parcs.json'


import Home from './Home.jsx'
import Llista from './Llista.jsx'
import Detall from './Detall.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />
          <Route exact path="/llista" element={<Llista />} />
          <Route path="/llista/:nombre" element={<Detall dades={dadesParcs}/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
