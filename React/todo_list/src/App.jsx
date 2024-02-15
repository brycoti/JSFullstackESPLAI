import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState(() => {
    // Recuperar tareas guardadas al cargar el componente
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  const [tarea, setTarea] = useState('');
  const [color, setColor] = useState('TRABAJO');
  
  const colorClases = {
    TRABAJO: 'text-blue-500',
    PERSONAL: 'text-green-500',
    URGENTE: 'text-red-500',
    FAMILIA: 'text-orange-500',
  };

  useEffect(() => {
    // Guardar tareas en localStorage cuando el estado de tareas cambie
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarea !== '') {
      const nuevaTarea = { texto: tarea, color: color };
      setTareas([...tareas, nuevaTarea]);
      setTarea('');
    }
  };

  const cambiaColor = (event) => {
    setColor(event.target.value);
  };

  const nuevaTarea = (event) => {
    setTarea(event.target.value);
  };

  const eliminaTarea = (id) => {
    const nuevasTareas = tareas.filter((_, index) => index !== id);
    setTareas(nuevasTareas);
  };

  const listaTareas = tareas.map((tarea, indice) => (
    <div key={indice} className={`flex justify-between items-center ${colorClases[tarea.color]} mb-2 py-2 px-4 rounded`}>
      <button className='bg-orange-200 hover:bg-orange-400 items-center  py-2 px-3 rounded' onClick={() => eliminaTarea(indice)}>
        <span>{tarea.texto}</span>
      </button>
    </div>
  ));

  return (
    <>
      <div className="flex flex-row place-items-start ">
        <form onSubmit={handleSubmit} className="m-4">
          <div>
            <h2 className="mb-3 text-2xl text-red-800">Introduce la nueva tarea</h2><br />

            <input value={tarea} onChange={nuevaTarea} name="nom" type="text" id="nom" placeholder='Nom'
            className="input bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>

          <div>
            <select onChange={cambiaColor} value={color} className="mt-4 bg-white border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
              <option value="TRABAJO">Trabajo (azul)</option>
              <option value="PERSONAL">Personal (verde)</option>
              <option value="URGENTE">Urgente (rojo)</option>
              <option value="FAMILIA">Familia (naranja)</option>
            </select>
          </div>

          <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Enviar</button>
       
        </form>

        <div className="w-full px-4  flex flex-col items-center border-l-2 border-red-400">
          <h2 className="text-3xl mb-4 text-red-800">Listado de Tareas</h2>
            <div className='grid  grid grid-cols-2 grid-rows-auto '>
              {listaTareas}
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
