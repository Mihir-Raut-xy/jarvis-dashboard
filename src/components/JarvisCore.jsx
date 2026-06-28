"use client";

export default function JarvisCore() {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">

      {/* Outer Ring */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-500 opacity-40 animate-spin [animation-duration:30s]" />

      {/* Ring 2 */}
      <div className="absolute w-[360px] h-[360px] rounded-full border-2 border-cyan-400 animate-spin [animation-duration:18s] [animation-direction:reverse]" />

      {/* Ring 3 */}
      <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-300 animate-spin [animation-duration:12s]" />

      {/* Ring 4 */}
      <div className="absolute w-[240px] h-[240px] rounded-full border border-cyan-500/60 animate-pulse" />

      {/* Energy Glow */}
      <div className="absolute w-[180px] h-[180px] rounded-full bg-cyan-500 blur-[90px] opacity-30 animate-pulse" />

      {/* Core */}
      <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 shadow-[0_0_120px_rgba(34,211,238,0.8)]">

        {/* Inner Pulse */}
        <div className="absolute w-20 h-20 rounded-full bg-white opacity-20 animate-ping"></div>

        {/* Center */}
        <div className="relative text-black text-2xl font-bold tracking-widest">
          J
        </div>

      </div>

      {/* Orbit Dots */}

      <div className="absolute w-[430px] h-[430px] animate-spin [animation-duration:10s]">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_20px_cyan]" />
      </div>

      <div className="absolute w-[350px] h-[350px] animate-spin [animation-duration:15s] [animation-direction:reverse]">
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-300 rounded-full -translate-x-1/2 shadow-[0_0_20px_cyan]" />
      </div>

      <div className="absolute w-[280px] h-[280px] animate-spin [animation-duration:8s]">
        <div className="absolute left-0 top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_15px_white]" />
      </div>

    </div>
  );
}