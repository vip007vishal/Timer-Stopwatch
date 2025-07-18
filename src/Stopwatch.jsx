import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <div className="display">
        {new Date(seconds * 1000).toISOString().substr(11, 8)}
      </div>
      <button className="start-btn" onClick={() => setIsRunning(true)}>Start</button>
      <button className="pause-btn" onClick={() => setIsRunning(false)}>Pause</button>
      <button className="reset-btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
