"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], {
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
    <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-zinc-800 p-6 hover:border-cyan-500 transition">
      <h3 className="text-gray-400 text-sm">
        Live Time
      </h3>

      <p className="text-3xl font-bold text-cyan-400 mt-4">
        {time}
      </p>
    </div>
  );
}
