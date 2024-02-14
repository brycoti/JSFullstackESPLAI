import {useContext} from "react";
import Contexte from "./Contexte.js";


function C3b() {

    const {nom} = useContext(Contexte);


    return (
        <div className="p-10 bg-red-300">
            <h1>{nom}</h1>
        </div>
    )

}

export default C3b;