import { useState } from "react";

function Formulari(){

    const [nom, setNom] = useState("pere");
    const [pass, setPass] = useState("1234");
    const [error, setError] = useState("");


 
    function handleChange(e){
       
        const value = e.target.value;
        const name = e.target.name;

        if(name==="nom"){
            setNom(value)
        } else if (name==="pass"){
            setPass(value)

        }
        console.log("camp canviat: ", name)

    }

    function enviar(e){
       e.preventDefault();

       if (pass!=="1234") setError("password incorrecte");

        console.log(`Nom: ${nom}, Pass: ${pass}`)
    }

    return (
        <>
        <form onSubmit={enviar}>
        <label for="camp-nom">Nom:</label>
            <input onChange={handleChange} id="camp-nom" name="nom" value={nom} type="text" />
            <br />
            <label for="camp-pass">Nom:</label>
            <input onChange={handleChange} id="camp-pass" name="pass" value={pass} type="password" />
        <br />
            <button type="submit">Enviar</button>
        </form>
            <br />
            <br />
            <br />
            <p class="text-red-500">{error}</p>

        </>
    )
}

export default Formulari;