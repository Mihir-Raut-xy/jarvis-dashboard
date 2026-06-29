"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  MemoryStick,
  Wifi,
  Bot,
} from "lucide-react";

function MiniGraph({ color }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className="h-10 w-28"
      fill="none"
    >
      <path
        d="M0 30
           C15 20 25 20 40 25
           S70 35 90 15
           S110 10 120 18"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Card({
  title,
  value,
  subtitle,
  icon: Icon,
  textColor,
  glowColor,
  graphColor,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-cyan-400/20
        bg-white/[0.05]
        backdrop-blur-2xl
        px-6
        py-5
        shadow-[0_0_35px_rgba(0,255,255,.08)]
      "
    >
      {/* Glow */}
      <div
        className="absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl"
        style={{ backgroundColor: glowColor, opacity: 0.15 }}
      />

      <div className="relative flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
            "
            style={{
              backgroundColor: glowColor,
              boxShadow: `0 0 18px ${glowColor}`,
            }}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>

          <div>

            <p className="text-xs uppercase tracking-[3px] text-gray-400">
              {title}
            </p>

            <h2
              className="mt-2 text-3xl font-bold"
              style={{ color: textColor }}
            >
              {value}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              {subtitle}
            </p>

          </div>

        </div>

        <MiniGraph color={graphColor} />

      </div>

    </motion.div>
  );
}

export default function StatusCards() {
  const [system, setSystem] = useState({
    cpu: "--",
    ram: "--",
    online: false,
  });

  useEffect(() => {
    let mounted = true;

    async function fetchSystem() {
      try {
        const res = await fetch("/api/system");
        const data = await res.json();

        if (!mounted) return;

        setSystem({
          cpu: data.cpu ?? "--",
          ram: data.ram ?? "--",
          online: data.online ?? false,
        });
      } catch {}

    }

    fetchSystem();

    const timer = setInterval(fetchSystem, 4000);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      <Card
        title="CPU"
        value={`${system.cpu}%`}
        subtitle="Processor Usage"
        icon={Cpu}
        textColor="#22d3ee"
        glowColor="#06b6d4"
        graphColor="#22d3ee"
      />

      <Card
        title="RAM"
        value={`${system.ram}%`}
        subtitle="Memory Usage"
        icon={MemoryStick}
        textColor="#34d399"
        glowColor="#10b981"
        graphColor="#34d399"
      />

      <Card
        title="NETWORK"
        value={system.online ? "ONLINE" : "OFFLINE"}
        subtitle="Connection Status"
        icon={Wifi}
        textColor={system.online ? "#a855f7" : "#ef4444"}
        glowColor={system.online ? "#9333ea" : "#ef4444"}
        graphColor={system.online ? "#a855f7" : "#ef4444"}
      />

      <Card
        title="AI"
        value="ACTIVE"
        subtitle="Jarvis Neural Core"
        icon={Bot}
        textColor="#facc15"
        glowColor="#eab308"
        graphColor="#facc15"
      />

    </div>
  );
}