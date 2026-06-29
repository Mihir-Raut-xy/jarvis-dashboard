"use client";

import { motion } from "framer-motion";

export default function ReactorHUD() {
  return (
    <>
      {/* Large Outer Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[560px] w-[560px] rounded-full border border-cyan-500/10"
      />

      {/* Scanner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute h-[500px] w-[500px] rounded-full"
      >
        {[...Array(72)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${i * 5}deg) translateY(-250px)`,
              transformOrigin: "center",
            }}
          >
            <div className="h-3 w-[2px] rounded-full bg-cyan-300/60" />
          </div>
        ))}
      </motion.div>

      {/* Inner HUD Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute h-[280px] w-[280px] rounded-full border border-cyan-300/30"
      />

      {/* Four Direction Markers */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute"
          style={{
            transform: `rotate(${deg}deg) translateY(-280px)`,
          }}
        >
          <div className="h-10 w-[3px] rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
        </div>
      ))}

      {/* Radar Sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute h-[520px] w-[520px] rounded-full"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[260px] w-[3px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "linear-gradient(to top, transparent, rgba(34,211,238,.9))",
            transformOrigin: "bottom center",
          }}
        />
      </motion.div>
    </>
  );
}