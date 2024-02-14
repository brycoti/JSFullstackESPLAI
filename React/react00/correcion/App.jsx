
import './App.css';
import Comptador from './Comptador';
import {Titol1, Titol2} from "./Titols";

function App () {

  return (
    <>
      <Titol1 text="un títol vermell" />
      <Titol2 text="un títol verd" />
      <h2>Hola què tal?</h2>
      <Comptador />
    </>
  )
}

export default App;