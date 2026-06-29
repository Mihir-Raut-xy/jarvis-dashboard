"use client";

import LiveClock from "@/components/LiveClock";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-cyan-400/20 px-10 py-6">

      {/* Left */}
      <div>
        <h1 className="text-5xl font-light tracking-[0.18em] text-cyan-400">
          JARVIS
        </h1>

        <p className="mt-2 text-sm tracking-widest text-gray-400 uppercase">
          Artificial Intelligence Operating System
        </p>
      </div>

      {/* Right */}
      <div className="text-right">
        <LiveClock />
      </div>

    </header>
  );
}