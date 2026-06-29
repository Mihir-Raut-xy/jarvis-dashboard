"use client";

import { motion } from "framer-motion";

export default function CoreHousing() {
  return (
    <motion.svg
      viewBox="0 0 700 700"
      className="absolute h-[560px] w-[560px]"
      animate={{ rotate: 360 }}
      transition={{
        duration: 180,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <defs>
        <linearGradient id="metal" x1="0" x2="1">
          <stop offset="0%" stopColor="#20242c" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>

        <linearGradient id="cyanLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="350" cy="350" r="242" fill="url(#metal)" stroke="#22d3ee55" strokeWidth="5" />
      <circle cx="350" cy="350" r="220" fill="#111827" stroke="#334155" strokeWidth="3" />

      {[...Array(12)].map((_, i) => {
        const angle = i * 30;
        return (
          <g key={i} transform={`rotate(${angle} 350 350)`}>
            <rect x="338" y="52" width="24" height="76" rx="8" fill="url(#metal)" stroke="#22d3ee33" />
            <rect x="344" y="68" width="12" height="40" fill="url(#cyanLine)" filter="url(#glow)" />
          </g>
        );
      })}

      <polygon
        points="350,182 490,264 490,436 350,518 210,436 210,264"
        fill="#0f172a"
        stroke="#22d3ee"
        strokeWidth="3"
      />

      <polygon
        points="350,220 462,286 462,414 350,480 238,414 238,286"
        fill="#020617"
        stroke="#334155"
        strokeWidth="2"
      />

      <line x1="350" y1="104" x2="350" y2="206" stroke="#475569" strokeWidth="6" />
      <line x1="350" y1="494" x2="350" y2="596" stroke="#475569" strokeWidth="6" />
      <line x1="104" y1="350" x2="206" y2="350" stroke="#475569" strokeWidth="6" />
      <line x1="494" y1="350" x2="596" y2="350" stroke="#475569" strokeWidth="6" />

      {[45, 135, 225, 315].map((deg) => {
        const r = 210;
        const x = 350 + Math.cos((deg * Math.PI) / 180) * r;
        const y = 350 + Math.sin((deg * Math.PI) / 180) * r;

        return <circle key={deg} cx={x} cy={y} r="8" fill="#94a3b8" />;
      })}
    </motion.svg>
  );
}