"use client";

export default function CoreGlow() {
  return (
    <>
      {/* Outer Glow */}
      <div className="absolute w-[620px] h-[620px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Middle Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[70px]" />

      {/* Inner Glow */}
      <div className="absolute w-[220px] h-[220px] rounded-full bg-cyan-300/20 blur-[30px]" />
    </>
  );
}