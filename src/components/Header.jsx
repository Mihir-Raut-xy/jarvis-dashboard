"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-cyan-500 px-8 py-5 flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold tracking-widest text-cyan-400">
          JARVIS
        </h1>

        <p className="text-gray-400">
          Artificial Intelligence Operating System
        </p>
      </div>

      <div className="text-right">
        <div className="text-3xl font-bold text-cyan-400">
          {time}
        </div>

        <div className="text-gray-400">
          {new Date().toDateString()}
        </div>
      </div>

    </header>
  );
}