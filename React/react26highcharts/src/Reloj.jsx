/* eslint-disable react-refresh/only-export-components */
import {useEffect, useState} from 'react';

const horaActual = () => (new Date()).toLocaleString('es-ES').split(' ')[1];

export default function Reloj () {

    const [usoHorario, setUsoHorario] = useState(horaActual());
    const [hora, setHora] = useState(horaActual());
    const actualiza = () => setHora(horaActual());
    useEffect(()=>{
            const  intervalo = setInterval(actualiza, 1000);
            return ()=>clearInterval(intervalo);
            }, []);
    return (

        <div className="text-center bg-pink-300 mg-10 p-4">
            <h1 className="text-3xl bg-red-600">Time</h1>
            <h2 className="text-blue-500 text-2xl">{hora}</h2>
            <br />
            <h3>Barcelona</h3>
        </div>
        
    )
}
