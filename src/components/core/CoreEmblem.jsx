"use client";

export default function CoreEmblem() {
  return (
    <div className="absolute flex items-center justify-center">

      {/* Outer frame */}
      <div className="absolute h-[220px] w-[220px] rounded-[40px] rotate-45 border border-cyan-400/20 bg-slate-900/70 backdrop-blur-xl" />

      {/* Inner frame */}
      <div className="absolute h-[170px] w-[170px] rounded-[32px] rotate-45 border border-cyan-300/30 bg-slate-950" />

      {/* Core */}
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_60px_rgba(34,211,238,.35)]">

        <div className="absolute h-16 w-16 rounded-full bg-cyan-400 blur-2xl opacity-60" />

        <div className="relative text-cyan-200 text-lg font-semibold tracking-[0.3em]">
          AI
        </div>

      </div>

    </div>
  );
}