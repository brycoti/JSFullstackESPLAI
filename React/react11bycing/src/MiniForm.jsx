import { useState } from "react";

export default function MiniForm({ onDisponiblesChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onDisponiblesChange(inputValue); // Pasamos el valor al componente padre
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="max-w-md mx-auto p-4 shadow-lg rounded-lg color-white dark:bg-gray-800 flex flex-row gap-6" onSubmit={handleFormSubmit}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          value={inputValue}
          onChange={handleInputChange}
          name="disponibles"
          type="number"
          id="disponibles"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label htmlFor="disponibles" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Número de bicis disponibles
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-gren-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Buscar
      </button>
    </form>
  );
}