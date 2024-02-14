
import { useEffect, useState } from "react";


function Usuaris () {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
     
        fetch("https://dummyjson.com/users")
        .then(resposta => resposta.json())
        .then(dummy => dummy.users)
        .then(dades => setUsers(dades))
        .catch(err => console.log(err))

    }, [])

    if (users.length===0){
        return <h1>Carregant...</h1>
    }

    return (
        <>
        <h1>Usuaris</h1>
        <table>

            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Cognom</th>
                    <th>Edat</th>
                    <th>Alçada</th>
                    <th>Foto</th>
                </tr>

            </thead>
            <tbody>
                {
                    users
                    .filter(u => u.age>40)
                    .map((u, index) => (
                        <tr key={index}>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.age}</td>
                            <td>{u.height}</td>
                            <td><img src={u.image} width={"80px"} alt={u.firstName} /></td>
                            <td><button class="border" onClick={()=>alert(u.firstName)}>SALUDA</button></td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
            {users[0].firstName}
        </>
    )
}

export default Usuaris;