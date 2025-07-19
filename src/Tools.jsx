// src/Tools.jsx
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

export default function Tools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-20 px-4 space-y-12">
      <h1 className="text-4xl font-bold text-center text-gray-800">Timer & Stopwatch Tools</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Timer />
        <Stopwatch />
      </div>
    </div>
  );
}
