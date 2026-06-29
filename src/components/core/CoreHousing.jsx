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
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Ring */}
      <circle
        cx="350"
        cy="350"
        r="250"
        fill="url(#metal)"
        stroke="#22d3ee55"
        strokeWidth="6"
      />

      <circle
        cx="350"
        cy="350"
        r="228"
        fill="#111827"
        stroke="#334155"
        strokeWidth="4"
      />

      {/* Mechanical Segments */}
      {[...Array(12)].map((_, i) => {
        const angle = i * 30;

        return (
          <g
            key={i}
            transform={`rotate(${angle} 350 350)`}
          >
            <rect
              x="334"
              y="54"
              width="32"
              height="82"
              rx="8"
              fill="url(#metal)"
              stroke="#22d3ee44"
            />

            <rect
              x="343"
              y="70"
              width="14"
              height="44"
              fill="url(#cyanLine)"
              filter="url(#glow)"
            />
          </g>
        );
      })}

      {/* Hex Chamber */}
      <polygon
        points="
350,175
500,262
500,438
350,525
200,438
200,262
"
        fill="#0f172a"
        stroke="#22d3ee"
        strokeWidth="4"
      />

      <polygon
        points="
350,210
470,280
470,420
350,490
230,420
230,280
"
        fill="#020617"
        stroke="#334155"
        strokeWidth="3"
      />

      {/* Mechanical Braces */}
      <line
        x1="350"
        y1="100"
        x2="350"
        y2="210"
        stroke="#475569"
        strokeWidth="8"
      />

      <line
        x1="350"
        y1="490"
        x2="350"
        y2="600"
        stroke="#475569"
        strokeWidth="8"
      />

      <line
        x1="100"
        y1="350"
        x2="210"
        y2="350"
        stroke="#475569"
        strokeWidth="8"
      />

      <line
        x1="490"
        y1="350"
        x2="600"
        y2="350"
        stroke="#475569"
        strokeWidth="8"
      />

      {/* Bolts */}
      {[45,135,225,315].map((deg) => {
        const r = 215;
        const x = 350 + Math.cos((deg*Math.PI)/180)*r;
        const y = 350 + Math.sin((deg*Math.PI)/180)*r;

        return (
          <circle
            key={deg}
            cx={x}
            cy={y}
            r="9"
            fill="#94a3b8"
          />
        );
      })}
    </motion.svg>
  );
}