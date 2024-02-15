
import { useEffect, useState } from "react";

function Users () {

    const [usuaris, setUsuaris ] = useState([])
    useEffect( ()=>{
        if (usuaris.length===0){
            fetch('https://dummyjson.com/users')
            .then(resp => resp.json())
            .then(resp => resp.users)
            .then(data => setUsuaris(data))
            .catch(err => console.log(err))
        }
        

    }, [])

    if (!usuaris.length){
        return <h1>Carregant...</h1>
    }


    return (
        <>  
        <table>
            <tbody>
                {usuaris.map(e => <tr key={e.id}><td>{e.id}</td><td>{e.firstName}</td></tr>)}
            </tbody>
        </table>

        </>
    )
}


export default Users;
