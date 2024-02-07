import {useState} from 'react';
import './Comptador.css'

function Comptador() {

    // let index = 0;
    const [index, setIndex] = useState(5);

    function sumar () {
        if(index<10){
            setIndex(index+1);
        }
        
    }

    function restar() {
        setIndex(index-1);
    }

    const colorText = index%2 ==0 ? "green" : "red";

    return (
        <>
            <button onClick= {restar}>-</button>
            <h1 style={{color: colorText}}>{index}</h1>
            <button disabled={index== 10} onClick= {sumar} >+</button>
        </>
    )
}

export default Comptador;