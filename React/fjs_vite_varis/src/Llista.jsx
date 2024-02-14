
import { useState } from "react";



function Llista(){


    const [arr1, setArr1] = useState([1,2,3]);


    function  accio(){

        console.log("Acció clicada!")

        //const arr2 = [...arr1]
        const arr2 = JSON.parse(JSON.stringify(arr1))


        arr2.push("hola")

        setArr1(arr2)

    }


    return (
        <>
            {
                arr1.map((e,idx) => <button class="border p-3">{e}</button>)
            }
            <br />

            <button onClick={accio}>Acció</button>
        </>
    )
}


export default Llista;