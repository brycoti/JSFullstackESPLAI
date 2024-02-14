import { useContext} from 'react';
import { useParams, Link } from 'react-router-dom';

import Contexte from './Contexte';

export default function Detall() {
    
   const {dadesParcs, idioma} = useContext(Contexte) // se puede enviar datos por usecontext o por elemento de main.

    const {nombre} = useParams()

    const parc = dadesParcs.find(parc => parc.nombre === nombre);

    

    return (
        <>
            <h1>Detalle de {idioma == 'esp' ? parc.titulo : parc.title}</h1><br />

            <div className="flex flex-col md:flex-row md:min-h-screen gap-8">
            <p>{ idioma == 'esp' ? parc.descripcion : parc.description}</p>
            <img src={parc.imagen} alt={parc.titulo} />
            <br />
            </div>
            <br />
            <Link  to="/llista" ><button>{idioma == 'esp' ? 'Volver' : 'Back'}</button></Link>
        </>
    );
}
