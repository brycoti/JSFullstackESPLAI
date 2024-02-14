
import {useContext} from 'react';

import Contexte from "./Contexte";

import { useParams } from "react-router-dom";


function Detall() {

    const {dadesParcs, idioma} = useContext(Contexte)

    const {nom} = useParams()

    const parc = dadesParcs.find(e => e.nom===nom)

    return (
        <>
            <h1 className="text-xl pb-4">{idioma=="es" ? parc.titol : parc.titol_ca}</h1>
            <p className="pb-4">{idioma=="es" ? parc.text : parc.text_ca}</p>
            <img className="w-2/3 m-auto" src={parc.imatge} />
         
        </>
    )
}


export default Detall;
