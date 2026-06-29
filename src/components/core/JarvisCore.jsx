"use client";

import CoreGlow from "./CoreGlow";
import CoreHUD from "./CoreHUD";
import CoreHousing from "./CoreHousing";
import CoreEmblem from "./CoreEmblem";

export default function JarvisCore() {
  return (
    <div className="relative flex h-full min-h-[680px] w-full items-center justify-center overflow-hidden rounded-[34px]">

      {/* Background glow */}
      <CoreGlow />

      {/* HUD overlay */}
      <CoreHUD />

      {/* Mechanical housing */}
      <CoreHousing />

      {/* AI emblem */}
      <CoreEmblem />

      {/* Bottom status */}
      <div className="absolute bottom-10 flex items-center gap-3 rounded-full border border-cyan-400/20 bg-black/40 px-6 py-2 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs tracking-[0.25em] text-cyan-300 uppercase">
          Neural Core Online
        </span>
      </div>

    </div>
  );
}