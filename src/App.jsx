import React from "react";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import './navbar.css';


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 font-sans">
      {/* Navbar */}


      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-center items-center gap-12 p-10">
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Timer</h2>
          <Timer />
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Stopwatch</h2>
          <Stopwatch />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-gray-500 py-4 shadow-inner mt-10">
        © {new Date().getFullYear()} Timer & Stopwatch. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
