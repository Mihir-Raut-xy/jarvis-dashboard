"use client";

export default function CoreEmblem() {
  return (
    <div className="absolute flex items-center justify-center">
      <div className="absolute h-[210px] w-[210px] rotate-45 rounded-[40px] border border-cyan-400/20 bg-slate-900/70 backdrop-blur-xl" />
      <div className="absolute h-[160px] w-[160px] rotate-45 rounded-[32px] border border-cyan-300/30 bg-slate-950" />

      <div className="relative flex h-[150px] w-[150px] items-center justify-center">
        <div className="absolute h-[120px] w-[120px] rounded-full bg-cyan-400/15 blur-2xl" />
        <div className="absolute h-[88px] w-[88px] rounded-full border border-cyan-300/60 bg-cyan-500/10 shadow-[0_0_60px_rgba(34,211,238,.45)]" />
        <div className="absolute h-[44px] w-[44px] rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(34,211,238,.75)]" />
      </div>
    </div>
  );
}