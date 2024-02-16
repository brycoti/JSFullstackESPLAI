import { useEffect, useState } from 'react';

// This function returns the current time. Adjustments based on time zone will need a more sophisticated approach.
const horaActual = (usoHorario) => {
  // Placeholder for a more complex time zone adjustment.
  // In a real application, consider using a library like `date-fns-tz` or `moment-timezone` for accurate time zone handling.
  const now = new Date();
  switch (usoHorario) {
    case 'USA':
      return now.toLocaleString('en-US', { timeZone: 'America/New_York' });
    case 'SouthAfrica':
      return now.toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' });
    case 'Spain':
      return now.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
    case 'Antarctica':
      return now.toLocaleString('en-US', { timeZone: 'Antarctica/McMurdo' });
    case 'Bogota':
      return now.toLocaleString('es-CO', { timeZone: 'America/Bogota' });
    default:
      return now.toLocaleString();
  }
};

export default function RelojInternacional() {
  const [usoHorario, setUsoHorario] = useState('Spain'); // Default to Spain as an example
  const [hora, setHora] = useState(horaActual(usoHorario));

  useEffect(() => {
    const actualiza = () => {
      setHora(horaActual(usoHorario));
    };
    const intervalo = setInterval(actualiza, 1000);
    return () => clearInterval(intervalo);
  }, [usoHorario]);

  const handleTimeZoneChange = (e) => {
    setUsoHorario(e.target.value);
  };

  return (
    <div className="text-center bg-pink-300 mg-10 p-8">
      <h1 className="text-3xl bg-red-600">World Time</h1>
      <h2 className="text-blue-500 text-2xl">{hora.split(',')[1]}</h2>
      <br />
      <form>
        <label htmlFor="usoHorario">Uso horario: </label>
        <select id="usoHorario" value={usoHorario} onChange={handleTimeZoneChange} className="border p-2 bg-green-300">
          <option value="Spain">España</option>
          <option value="USA">USA</option>
          <option value="SouthAfrica">Sudáfrica</option>
          <option value="Antarctica">Antártida</option>
          <option value="Bogota">Bogotá</option>
        </select>
        <br />
        
      </form>
    </div>
  );
}
