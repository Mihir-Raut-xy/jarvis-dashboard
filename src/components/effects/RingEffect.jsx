"use client";

import { motion } from "framer-motion";

export default function RingEffect({
  size,
  duration = 20,
  reverse = false,
  opacity = 0.5,
}) {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      className="absolute flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      {/* Main Ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px solid rgba(34,211,238,.35)",
          boxShadow: `
            0 0 20px rgba(34,211,238,.30),
            inset 0 0 20px rgba(34,211,238,.12)
          `,
        }}
      />

      {/* Inner Ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: "92%",
          height: "92%",
          border: "1px solid rgba(34,211,238,.18)",
        }}
      />

      {/* Outer Ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: "106%",
          height: "106%",
          border: "1px solid rgba(34,211,238,.10)",
        }}
      />

      {/* Cardinal Markers */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute"
          style={{
            transform: `rotate(${deg}deg) translateY(-${size / 2}px)`,
            transformOrigin: "center",
          }}
        >
          <div className="h-6 w-[2px] rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.9)]" />
        </div>
      ))}

      {/* Diagonal Markers */}
      {[45, 135, 225, 315].map((deg) => (
        <div
          key={deg}
          className="absolute"
          style={{
            transform: `rotate(${deg}deg) translateY(-${size / 2}px)`,
            transformOrigin: "center",
          }}
        >
          <div className="h-3 w-[2px] rounded-full bg-cyan-400/80" />
        </div>
      ))}
    </motion.div>
  );
}