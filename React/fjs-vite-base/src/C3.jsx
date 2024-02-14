
import {useContext} from "react";
import Contexte from "./Contexte.js";



 
function C3() {
    const {nom, setNom} = useContext(Contexte);


    return (
        <>
         <div className="p-10 bg-green-300">
        <h1>ELEMENT A </h1>

        <input value={nom} onChange={(e)=>setNom(e.target.value)} />
        
        <br />
   

    </div>
        </>
    )
}

export default C3;