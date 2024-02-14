import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Detall () {

    const [usuari, setUsuari] = useState([]);
    const parametres = useParams();
    const id = useParams().id


    useEffect(() => {
        fetch('https://jsonplaceholder.org/users/'+id)
        .then(resp => resp.json())
        .then(dades => setUsuari(dades))
        .catch(err => console.log(err))
    }, []);

    if (!usuari) {
        return <h1>Cargando datos...</h1>
    }

    return (
        <>
                <h1>Usuari: {usuari.firstname + " " + usuari.lastname}</h1>
        <h2>Email: {usuari.email}</h2>

        <Link to = "/llista" >Tornar</Link> 
                
        </>
    )
}

export default Detall;