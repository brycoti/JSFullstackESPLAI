import { useState } from 'react'
import './App.css'
import C1 from './C1'
import C1b from './C1b'

import Contexte from "./Contexte";







function App() {

  const [nom, setNom] = useState("HOLA CONTEXT")

  const dades = {nom: nom, setNom: setNom}

  return (
    <Contexte.Provider value={dades}>
      < div className="p-20">
        <C1  />
        <p>{nom}</p>


        <br />
        <br />
        <C1b  />
      </div>
    </Contexte.Provider>

  )
}

export default App
