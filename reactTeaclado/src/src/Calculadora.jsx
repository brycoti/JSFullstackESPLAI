import { useState } from "react";
import Pantalla from "./Pantalla";
import Teclat from "./Teclat";


function Calculadora(){

    const [valor, setValor] = useState("");

    function prem(digit){
        setValor(valor+digit)
    }

    return (
        <div>
            <Pantalla valor={valor} />
            <Teclat prem={prem} />
        </div>
    )
}

export default Calculadora;