import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Llista () {

    const [usuaris, setUsuaris] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.org/users')
        .then(resp => resp.json())
        .then(dades => setUsuaris(dades))
        .catch(err => console.log(err))
    }, []);

    if (usuaris.length === 0) {
        return <h1>Cargando datos...</h1>
    }

    return (
        <>
                <h1>Usuarios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                        </tr>

                    </thead>
                    <tbody>
                        {usuaris.map((u) => 
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>
                                    <Link to={`/llista/${u.id}`}>{u.firstname + " " + u.lastname}</Link>
                                </td>
                            </tr>
                        )} 
                    </tbody>                       
                </table>
        </>
    )
}

export default Llista;