"use client";

export default function CoreHUD() {
  return (
    <svg
      className="absolute w-[560px] h-[560px]"
      viewBox="0 0 560 560"
    >
      <circle
        cx="280"
        cy="280"
        r="205"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeDasharray="3 12"
        opacity=".7"
      />

      <circle
        cx="280"
        cy="280"
        r="225"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        opacity=".2"
      />

      <circle
        cx="280"
        cy="280"
        r="250"
        fill="none"
        stroke="#22d3ee"
        strokeWidth=".8"
        opacity=".08"
      />

      {/* Cardinal markers */}
      <g stroke="#22d3ee" strokeWidth="3">
        <line x1="280" y1="18" x2="280" y2="42" />
        <line x1="280" y1="518" x2="280" y2="542" />
        <line x1="18" y1="280" x2="42" y2="280" />
        <line x1="518" y1="280" x2="542" y2="280" />
      </g>
    </svg>
  );
}