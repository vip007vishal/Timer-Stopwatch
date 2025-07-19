import React from 'react';
import Timer from './Timer';
import Stopwatch from './Stopwatch';
import './index.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <i className="fas fa-clock"></i>
          Timer & Stopwatch
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="https://vip007vishal.github.io/Timer-Stopwatch/Login.html">Login</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <h1>Timer & Stopwatch Tools</h1>
        <div className="tools-container">
          <div className="tool"><Timer /></div>
          <div className="tool"><Stopwatch /></div>
        </div>
      </main>
    </div>
  );
}

export default App;
