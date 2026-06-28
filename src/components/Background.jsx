"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* Main Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[300px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

    </div>
  );
}