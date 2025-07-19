// src/Stopwatch.jsx
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const format = (ms) => {
    const pad = (n) => n.toString().padStart(2, "0");
    const centiseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / 60000);
    return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto text-center space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Stopwatch</h2>
      <div className="text-4xl font-mono">{format(time)}</div>
      <div className="space-x-4">
        <button
          onClick={() => setRunning(!running)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(0);
          }}
          className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
