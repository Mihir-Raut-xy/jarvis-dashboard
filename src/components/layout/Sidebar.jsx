"use client";

import {
  House,
  LayoutDashboard,
  MessageSquare,
  Image,
  Grid2X2,
  Settings,
  Power,
} from "lucide-react";

const items = [
  House,
  LayoutDashboard,
  MessageSquare,
  Image,
  Grid2X2,
  Settings,
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col items-center justify-between py-6">

      {/* Logo */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_25px_rgba(34,211,238,.25)]">
        <span className="text-xl font-bold text-cyan-300">J</span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-5">
        {items.map((Icon, index) => (
          <button
            key={index}
            className={`
              flex h-14 w-14 items-center justify-center
              rounded-2xl
              border
              transition-all duration-300

              ${
                index === 0
                  ? "border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.35)]"
                  : "border-cyan-400/15 bg-white/5 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-300"
              }
            `}
          >
            <Icon size={22} />
          </button>
        ))}
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center gap-5">

        <button
          className="
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            border border-red-400/20
            bg-red-500/10
            text-red-300
            transition-all
            hover:border-red-400/40
          "
        >
          <Power size={20} />
        </button>

        <div className="h-14 w-14 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-400 to-cyan-700 shadow-[0_0_20px_rgba(34,211,238,.35)]" />

      </div>

    </div>
  );
}