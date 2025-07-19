import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Timer & Stopwatch</h1>
        <div>
          <Link to="/" className="nav-link">Timer</Link>
          <Link to="/stopwatch" className="nav-link">Stopwatch</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
}
