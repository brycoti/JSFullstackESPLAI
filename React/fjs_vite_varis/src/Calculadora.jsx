import { useState, useEffect } from "react";
import Pantalla from "./Pantalla";
import Teclat from "./Teclat";

function Calculadora(){

    const [valor, setValor] = useState("0");

    useEffect(()=>{
        console.log("valor canviat: ", valor)
    }, [valor])

    function prem(digit){
        if(digit == "C"){
            //neteja pantalla
            setValor("0")
        } else if (digit=="="){
            //calcula resultat
            const resultat = eval(valor)
            setValor(resultat+"")
            console.log("resultat: ", resultat)
        } else if (digit=="M"){
            localStorage.setItem("memoria", valor);
            setValor("0")
        } else if (digit == "RM"){
            setValor(localStorage.getItem("memoria"))
        } else {
            if (valor=="0"){
                setValor(digit)
            } else {
                setValor(valor+digit)
            }
        }
    }

    return (
        <div class="w-1/2 m-auto">
            <Pantalla valor={valor} />
            <Teclat prem={prem} />
        </div>
    )
}

export default Calculadora;