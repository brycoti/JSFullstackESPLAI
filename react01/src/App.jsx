import { Hola } from "./Hola";
import {Bola} from "./Bola";
import {Cuadrado} from "./Cuadrado";
import {Separador} from "./Separador";
import { Titulo } from "./Titulo";
import BolaX from "./BolaX"
import CuadradoB from "./CuadradoB"

function App () {
  return (
    <>
    <Hola text="Hola Mundo"/>
    <br />
    <Bola/> 
    <br />
    
    <br />
    <Cuadrado/>
    <br />
    <Separador/>
    <br />
    <Titulo titulo="Hola React!"/>
    <br />
    <BolaX talla="80px" margen="100px" fondo="#ff0000"/>
    <br />
    <CuadradoB talla="70px" margen="8px" grosor="5px" color="red" />
    <br />
    </>

    // tableicons para ahcer el Mosca
  )
}

export default App;