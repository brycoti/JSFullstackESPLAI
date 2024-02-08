import { Hola, Bola, Cuadrado, Separador, Titulo, BolaX, CuadradoB, Capital, Gato, FotoBola, BolaBingo} from './components';


function App () {
  return (
    <>

    <div className="display:flex justify-content:center">
      <Hola text="Hola Mundo"/>
      <Bola/> 
      <Cuadrado/>
      <Separador/>
    </div>
    
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Titulo titulo="Hola React!" />
      <BolaX talla="8px" margen="10px" fondo="#ff0000" />
      <CuadradoB talla="7px" margen="8px" grosor="5px" color="red" />
    </div>

    <Capital nom="barcelona" />
    <Gato ancho="200px" alto="200px" nombre="Garfield" />
    <FotoBola src="https://www.il-lumina.com/4075-home_default/bola-navidad-azul-con-brillantina-purpurina-.jpg" radio="100%"/>

    <BolaBingo num="22"/>
    </>

  )
}

export default App;