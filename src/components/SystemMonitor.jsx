"use client";

import { useEffect, useState } from "react";

export default function SystemMonitor() {
  const [system, setSystem] = useState({
    cpu: "--",
    ram: "--",
    battery: "Loading...",
    online: false,
  });

  useEffect(() => {
    let mounted = true;

    const fetchSystem = async () => {
      try {
        const res = await fetch("/api/system", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch system data.");
        }

        const data = await res.json();

        if (mounted) {
          setSystem({
            cpu: data.cpu ?? "--",
            ram: data.ram ?? "--",
            battery: data.battery ?? "Unknown",
            online: data.online ?? false,
          });
        }
      } catch (error) {
        console.error("System Monitor:", error);

        if (mounted) {
          setSystem({
            cpu: "--",
            ram: "--",
            battery: "Unavailable",
            online: false,
          });
        }
      }
    };

    // Initial fetch
    fetchSystem();

    // Refresh every second
    const interval = setInterval(fetchSystem, 1000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-cyan-500/50 bg-gray-900/60 backdrop-blur-lg p-6 shadow-lg shadow-cyan-500/10">
      <h2 className="mb-6 text-center text-2xl font-bold tracking-widest text-cyan-400">
        SYSTEM STATUS
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-gray-300">🖥 CPU Usage</span>
          <span className="font-semibold text-cyan-300">
            {system.cpu}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">💾 RAM Usage</span>
          <span className="font-semibold text-cyan-300">
            {system.ram}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">🔋 Battery</span>
          <span className="font-semibold text-cyan-300">
            {typeof system.battery === "number"
              ? `${system.battery}%`
              : system.battery}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">🌐 Network</span>
          <span
            className={`font-semibold ${
              system.online ? "text-green-400" : "text-red-400"
            }`}
          >
            {system.online ? "🟢 Online" : "🔴 Offline"}
          </span>
        </div>

      </div>
    </div>
  );
}