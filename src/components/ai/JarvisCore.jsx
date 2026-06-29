"use client";

import { useState } from "react";
import "./reactor.css";

const HUD_TICKS = [
  [508, 300, 538, 300],
  [481, 394, 507, 409],
  [394, 481, 409, 507],
  [300, 508, 300, 538],
  [206, 481, 191, 507],
  [119, 394, 93, 409],
  [92, 300, 62, 300],
  [119, 206, 93, 191],
  [206, 119, 191, 93],
  [300, 92, 300, 62],
  [394, 119, 409, 93],
  [481, 206, 507, 191],
];

const PARTICLES = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  const radius = 135 + (i % 5) * 14;
  return {
    id: i,
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    size: 2 + (i % 3),
    delay: (i % 8) * 0.18,
  };
});

export default function JarvisCore() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`reactor-shell${active ? " reactor-active" : ""}`}
      onClick={() => setActive((v) => !v)}
      role="button"
      tabIndex={0}
    >
      <div className="panel-header">
        <h2 className="panel-title">JARVIS CORE</h2>
      </div>

      <div className="core-stage">
        <div className="reactor-wrap">
          <div className="reactor-ambient" />
          <div className="reactor-scan" />

          <div className="reactor-ring ring-outer">
            <svg viewBox="0 0 600 600" className="ring-svg" aria-hidden="true">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#27d7ff" />
                  <stop offset="50%" stopColor="#5b7cff" />
                  <stop offset="100%" stopColor="#27d7ff" />
                </linearGradient>
                <filter id="ringGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle
                cx="300"
                cy="300"
                r="246"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="2"
                strokeDasharray="1 13"
                strokeLinecap="round"
                opacity="0.9"
                filter="url(#ringGlow)"
              />
              <circle
                cx="300"
                cy="300"
                r="226"
                fill="none"
                stroke="rgba(73,211,255,0.18)"
                strokeWidth="1.2"
                strokeDasharray="3 9"
                opacity="0.9"
              />
              <circle
                cx="300"
                cy="300"
                r="214"
                fill="none"
                stroke="rgba(73,211,255,0.58)"
                strokeWidth="1.6"
                strokeDasharray="18 14"
                strokeLinecap="round"
              />

              {HUD_TICKS.map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(83, 217, 255, 0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}
            </svg>
          </div>

          <div className="reactor-ring ring-mid">
            <svg viewBox="0 0 600 600" className="ring-svg" aria-hidden="true">
              <circle cx="300" cy="300" r="170" fill="none" stroke="rgba(40, 176, 255, 0.22)" strokeWidth="2" />
              <circle cx="300" cy="300" r="154" fill="none" stroke="#37dfff" strokeWidth="2" strokeDasharray="7 11" strokeLinecap="round" />
              <circle cx="300" cy="300" r="146" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="2 8" />
            </svg>
          </div>

          <div className="reactor-ring ring-inner">
            <svg viewBox="0 0 600 600" className="ring-svg" aria-hidden="true">
              <path d="M300 118 L396 184 L396 298 L300 362 L204 298 L204 184 Z" fill="rgba(10, 18, 34, 0.82)" stroke="#30d7ff" strokeWidth="3" />
              <path d="M300 144 L371 194 L371 287 L300 334 L229 287 L229 194 Z" fill="rgba(120, 240, 255, 0.12)" stroke="rgba(60, 215, 255, 0.85)" strokeWidth="2" />
              <path d="M300 170 L347 203 L347 274 L300 303 L253 274 L253 203 Z" fill="rgba(255,255,255,0.92)" stroke="#7fe9ff" strokeWidth="2" />
              <path d="M300 206 L318 217 L318 252 L300 263 L282 252 L282 217 Z" fill="#40d9ff" opacity="0.95" />
            </svg>
          </div>

          <svg viewBox="0 0 600 600" className="arc-layer" aria-hidden="true">
            <defs>
              <filter id="arcGlow">
                <feGaussianBlur stdDeviation="2.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M180 272 C150 225, 165 180, 213 155 C240 140, 270 150, 290 170" className="lightning" filter="url(#arcGlow)" />
            <path d="M420 250 C458 220, 456 178, 412 150 C388 135, 357 146, 338 166" className="lightning lightning-alt" filter="url(#arcGlow)" />
            <path d="M205 394 C166 372, 150 330, 170 292 C182 270, 206 258, 228 252" className="lightning lightning-soft" filter="url(#arcGlow)" />
            <path d="M405 402 C438 379, 454 338, 438 300 C427 273, 405 258, 378 252" className="lightning lightning-soft" filter="url(#arcGlow)" />
          </svg>

          <div className="energy-flares" aria-hidden="true">
            <span className="flare flare-1" />
            <span className="flare flare-2" />
            <span className="flare flare-3" />
            <span className="flare flare-4" />
          </div>

          <div className="reactor-core-glow" />

          <div className="particle-field" aria-hidden="true">
            {PARTICLES.map((p) => (
              <span
                key={p.id}
                className="particle"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="core-symbol">
            <svg viewBox="0 0 500 500" className="core-svg" aria-hidden="true">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#glow)">
                <path d="M250 70 L385 145 L430 300 L360 418 L250 445 L140 418 L70 300 L115 145 Z" fill="rgba(7, 12, 24, 0.92)" stroke="#1ecfff" strokeWidth="8" />
                <path d="M250 108 L356 168 L390 288 L335 386 L250 408 L165 386 L110 288 L144 168 Z" fill="rgba(17, 28, 52, 0.96)" stroke="#33ddff" strokeWidth="5" />
                <path d="M250 147 L320 188 L342 273 L307 345 L250 360 L193 345 L158 273 L180 188 Z" fill="rgba(240,250,255,0.96)" stroke="#84f0ff" strokeWidth="4" />
                <path d="M250 181 L290 205 L304 257 L285 300 L250 312 L215 300 L196 257 L210 205 Z" fill="#46dcff" opacity="0.95" />
              </g>
            </svg>
          </div>

          <div className="scanner-line" />
        </div>
      </div>

      <div className="core-status">
        <span className="core-dot" />
        <span>STATUS: {active ? "ACTIVE" : "IDLE"}</span>
      </div>
    </div>
  );
}