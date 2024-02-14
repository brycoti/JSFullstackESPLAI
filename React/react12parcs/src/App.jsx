import {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Contexte from "./Contexte";
import dadesParcs from './parcs.json';
import './App.css'
import TriaIdioma from './TriaIdioma';

function App() {

    const [idioma, setIdioma] = useState("esp");

  const dades = {
    dadesParcs, 
    idioma,
    setIdioma
  }



    return (
        <Contexte.Provider value={dades}>

        <TriaIdioma />

        <div className="flex flex-col md:flex-row md:min-h-screen gap-8">
            <nav className="flex justify-between items-center bg-red-300 p-4 text-white w-full md:w-auto md:flex-col md:flex-shrink-0 md:h-full gap-8">
                    <button className='text-xl hover:text-red-800'><Link to="/">Home</Link></button>
                    <button className='text-xl hover:text-red-800'><Link to="/llista">{idioma == 'esp' ? 'Lista Parques' : 'Parc List'}</Link></button>
                    
            </nav>

            <section className="flex-grow p-4">
                <Outlet />
            </section>
        </div>

        </Contexte.Provider>
    );
}

export default App;
