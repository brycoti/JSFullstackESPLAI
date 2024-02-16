import React, { useEffect, useState } from 'react';

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function Temporizador() {
  const [secs, setSecs] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let interval;
    if (play && secs > 0) {
      interval = setInterval(() => {
        setSecs(secs => secs - 1);
      }, 1000);
    } else if (secs <= 0) {
      clearInterval(interval);
      setPlay(false); // Detiene el cronómetro cuando llega a 0
    }
    return () => clearInterval(interval);
  }, [play, secs]);

  const toggleTimer = () => {
    if (secs > 0) setPlay(!play); // Solo permite iniciar si hay segundos
  };

  const resetTimer = () => {
    setSecs(0);
    setPlay(false);
  };

  const addSecond = () => {
    setSecs(secs => secs + 10);
  };

  const subtractSecond = () => {
    setSecs(secs => Math.max(0, secs - 10)); // Evita números negativos
  };

  return (
    <div className="text-center bg-pink-300 mg-10 p-4">
      <h1 className="text-3xl bg-red-600">Cuenta Atrás</h1>
      <h2 className={`${play ? "text-green-500" : "text-red-500"} text-2xl`}>{formatTime(secs)}</h2>
      <br />
      <button className="border p-4 bg-yellow-300 mr-2" onClick={addSecond}>+</button>
      <button className="border p-4 bg-yellow-300 mr-2" onClick={subtractSecond}>-</button>
      <button className="border p-4 bg-green-300 mr-2" onClick={toggleTimer}>{play ? 'Pausa' : 'Inicio'}</button>
      <button className="border p-4 bg-blue-300" onClick={resetTimer}>Resetear</button>
    </div>
  );
}
