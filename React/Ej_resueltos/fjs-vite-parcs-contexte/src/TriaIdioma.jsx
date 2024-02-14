
import {useContext} from 'react';
import Contexte from './Contexte';


function Dropdown() {
  const {idioma, setIdioma} = useContext(Contexte);

  const handleChange = (event) => {
    setIdioma(event.target.value);
  };

  return (
    <div className="w-32">
      <label htmlFor="language" className="block text-sm font-medium text-gray-700">Idioma:</label>
      <select
        id="language"
        name="language"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={idioma}
        onChange={handleChange}
      >
        <option value="ca">Català</option>
        <option value="es">Espanyol</option>
      </select>
    </div>
  );
}

export default Dropdown;

