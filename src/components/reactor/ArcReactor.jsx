"use client";

import ReactorHUD from "./ReactorHUD";
import OrbitDots from "./OrbitDots";
import EnergyPulse from "./EnergyPulse";
import HexGrid from "./HexGrid";
import MechanicalReactor from "./MechanicalReactor";

export default function ArcReactor() {
  return (
    <div className="relative flex h-[680px] w-full items-center justify-center overflow-hidden">

      {/* Background HUD */}
      <HexGrid />

      {/* Soft blue glow */}
      <div className="absolute h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* HUD Layers */}
      <ReactorHUD />

      {/* Orbiting particles */}
      <OrbitDots />

      {/* Energy waves */}
      <EnergyPulse />

      {/* NEW Unified Mechanical Reactor */}
      <MechanicalReactor />

    </div>
  );
}