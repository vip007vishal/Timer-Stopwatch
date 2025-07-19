// src/Timer.jsx
import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(60); // in seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, timeLeft]);

  const format = (sec) => {
    const pad = (n) => n.toString().padStart(2, "0");
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto text-center space-y-6">
      <h2 className="text-2xl font-bold text-green-600">Countdown Timer</h2>
      <div className="text-4xl font-mono">{format(timeLeft)}</div>
      <div className="space-x-4">
        <button
          onClick={() => setRunning(!running)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTimeLeft(60);
          }}
          className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
