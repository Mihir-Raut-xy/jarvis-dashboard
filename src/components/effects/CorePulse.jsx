"use client";

import { motion } from "framer-motion";

export default function CorePulse() {
  return (
    <motion.div
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-400 bg-black shadow-[0_0_80px_rgba(0,255,255,0.6)]"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-[8px] text-cyan-300">
          J
        </h1>
        <p className="mt-2 text-xs tracking-[4px] text-cyan-500">
          AI CORE
        </p>
      </div>
    </motion.div>
  );
}