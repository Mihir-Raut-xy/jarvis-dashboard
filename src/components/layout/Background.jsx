"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Top Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-60 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[180px]"
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-250px] top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/40 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [30, -30, 30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-250px] bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/30 blur-[150px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,255,255,.25) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,.25) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan Lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(255,255,255,.25) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.85)_100%)]" />

    </div>
  );
}