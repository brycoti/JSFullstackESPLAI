import React, { useEffect, useState } from 'react';

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function Timer() {
  const [secs, setSecs] = useState(0);
  const [play, setPlay] = useState(false); // Start with the timer stopped

  useEffect(() => {
    let interval;
    if (play) {
      interval = setInterval(() => setSecs(secs => secs + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [play]);

  const toggleTimer = () => {
    setPlay(!play);
  };

  const resetTimer = () => {
    setSecs(0);
    setPlay(false); // Optionally stop the timer when resetting
  };

  return (
    <div className="text-center bg-pink-300 mg-10 p-4">
      <h1 className="text-3xl bg-red-600">Crono</h1>
      <h2 className={`${play ? "text-green-500" : "text-red-500"} text-2xl`}>{formatTime(secs)}</h2>
      <br />
      <button className="border p-4 bg-green-300 mr-2" onClick={toggleTimer}>{play ? 'Stop' : 'Start'}</button>
      <button className="border p-4 bg-blue-300" onClick={resetTimer}>Reset</button>
    </div>
  );
}
