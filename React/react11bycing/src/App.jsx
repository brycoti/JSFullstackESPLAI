import { useState } from "react";
import MiniForm from "./MiniForm";
import Bicis from "./Bicis";

function App() {
  const [disponibles, setDisponibles] = useState(0);

  const handleDisponiblesChange = (value) => {
    setDisponibles(Number(value) || 0); // Convierte el valor a número y se asegura de que sea válido
  };

  return (
    <div className="container bg-green-200 mx-auto p-4">
      <h1 className="text-center my-8  text-green-800 text-3xl">Consulta de Bicis Disponibles</h1>
      <MiniForm onDisponiblesChange={handleDisponiblesChange} />
      <Bicis disponibles={disponibles} />
    </div>
  );
}

export default App;
