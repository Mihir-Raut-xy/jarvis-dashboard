"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Mic,
  Brain,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Voice",
    href: "/voice",
    icon: Mic,
  },
  {
    name: "Memory",
    href: "/memory",
    icon: Brain,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-950 border-r border-cyan-500 p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        JARVIS
      </h1>

      <nav className="space-y-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500/20 transition"
            >
              <Icon size={22} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}