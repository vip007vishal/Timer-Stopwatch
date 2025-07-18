import React from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

function App() {
  return (
    <div className="container">
      <div className="box">
        <h2>Countdown Timer</h2>
        <Timer />
      </div>
      <div className="box">
        <h2>Stopwatch</h2>
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
