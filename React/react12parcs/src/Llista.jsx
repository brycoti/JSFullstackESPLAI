import { useContext} from 'react';
import { Link } from 'react-router-dom';
import parcs from './parcs.json'; // Corrected import statement


import Contexte  from './Contexte'; 

function Llista() {

  const {idioma} = useContext(Contexte)
  // Assuming `parcs` is an array loaded from the JSON file directly
  if (parcs.length === 0) {
    return <h1>Cargando datos...</h1>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>{idioma == 'esp' ? 'Lista Parques' : 'Parc List'}</th>
          </tr>
        </thead>
        <tbody>
          {parcs.map((parc) => (
            <tr key={parc.id}>
              <td className='w-1/2'><Link to={`/llista/${parc.nombre}`}>{idioma == 'esp' ? parc.titulo : parc.title}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Llista;
