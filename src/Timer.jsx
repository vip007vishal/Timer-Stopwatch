import React, { useState, useEffect } from 'react';

function Timer() {
  const [inputTime, setInputTime] = useState(60); // in seconds
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const start = () => {
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(inputTime);
  };

  return (
    <div>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => {
          setInputTime(Number(e.target.value));
          setTimeLeft(Number(e.target.value));
        }}
        style={{ padding: '8px', borderRadius: '6px', fontSize: '16px', marginBottom: '10px' }}
      />
      <div className="display">
        {new Date(timeLeft * 1000).toISOString().substr(11, 8)}
      </div>
      <button className="start-btn" onClick={start}>Start</button>
      <button className="pause-btn" onClick={() => setIsRunning(false)}>Pause</button>
      <button className="reset-btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
