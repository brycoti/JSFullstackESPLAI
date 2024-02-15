import { useState } from "react";
import MiniForm from "./MiniForm";
import Bicis from "./Bicis";

function App() {
  const [disponibles, setDisponibles] = useState(0);

  const handleDisponiblesChange = (value) => {
    setDisponibles(Number(value) || 0); // Convierte el valor a número y se asegura de que sea válido
  };

  return (
    <>
      <h1 className="text-center my-8">Consulta de Bicis Disponibles</h1>
      <MiniForm onDisponiblesChange={handleDisponiblesChange} />
      <Bicis disponibles={disponibles} />
    </>
  );
}

export default App;
