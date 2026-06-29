"use client";

import React, { useId, useMemo, useState } from "react";
import "./reactor.css";

const DEFAULT_POWER = true;
const TICKS = 48;
const PARTICLES = 18;
const ORBIT_MARKERS = 12;

function buildTicks(count) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (360 / count) * index;
    const major = index % 6 === 0;
    const medium = index % 3 === 0;

    return {
      id: `tick-${index}`,
      angle,
      length: major ? 18 : medium ? 12 : 7,
      width: major ? 2.5 : 1.35,
      opacity: major ? 1 : medium ? 0.72 : 0.42,
    };
  });
}

function buildParticles(count) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (360 / count) * index;
    const radius = 84 + (index % 5) * 6;
    const delay = (index % 8) * 0.18;
    const size = index % 4 === 0 ? 5 : index % 3 === 0 ? 4 : 3;

    return {
      id: `particle-${index}`,
      angle,
      radius,
      delay,
      size,
    };
  });
}

function buildMarkers(count) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (360 / count) * index + (index % 2 === 0 ? 4 : -4);

    return {
      id: `marker-${index}`,
      angle,
      size: index % 4 === 0 ? 10 : 7,
    };
  });
}

function JarvisCore() {
  const svgId = useId();
  const [isPoweredOn, setIsPoweredOn] = useState(DEFAULT_POWER);
  const [pulseCount, setPulseCount] = useState(0);
  const [pulseNonce, setPulseNonce] = useState(0);

  const ticks = useMemo(() => buildTicks(TICKS), []);
  const particles = useMemo(() => buildParticles(PARTICLES), []);
  const markers = useMemo(() => buildMarkers(ORBIT_MARKERS), []);

  const palette = isPoweredOn
    ? {
        primary: "#63f6ff",
        secondary: "#2f8bff",
        white: "#efffff",
        dark: "#08111f",
        status: "ONLINE",
        statusDot: "#4ff0b0",
        lightning: "rgba(153, 250, 255, 0.95)",
        lightningSoft: "rgba(65, 184, 255, 0.72)",
      }
    : {
        primary: "#ff6b57",
        secondary: "#ff2f4f",
        white: "#fff0ec",
        dark: "#1d0710",
        status: "OFFLINE",
        statusDot: "#ff866a",
        lightning: "rgba(255, 132, 132, 0.95)",
        lightningSoft: "rgba(255, 77, 95, 0.72)",
      };

  const triggerPulse = () => {
    setPulseCount((value) => value + 1);
    setPulseNonce((value) => value + 1);
  };

  const togglePower = () => {
    setIsPoweredOn((value) => !value);
    setPulseCount((value) => value + 1);
    setPulseNonce((value) => value + 1);
  };

  const pulseKey = `${pulseCount}-${pulseNonce}-${isPoweredOn ? "on" : "off"}`;

  return (
    <section className="reactor-shell" aria-label="JARVIS power core">
      <button
        type="button"
        className={`reactor-wrap reactor-core-${isPoweredOn ? "on" : "off"} ${
          pulseCount > 0 ? "reactor-pulsing" : ""
        } ${isPoweredOn ? "reactor-active" : "reactor-inactive"}`}
        aria-label={`JARVIS power core. Status ${palette.status}. Click to pulse. Double click to toggle power.`}
        aria-pressed={isPoweredOn}
        data-state={isPoweredOn ? "on" : "off"}
        onClick={triggerPulse}
        onDoubleClick={togglePower}
      >
        <h2 id={`${svgId}-title`} className="sr-only">
          JARVIS AI power core
        </h2>
        <p id={`${svgId}-desc`} className="sr-only">
          A futuristic AI power core with a triangular crystal, armored mechanical chassis, HUD ring, scanner sweep, and electrical discharge.
        </p>

        <div className="reactor-ambient" aria-hidden="true" />

        <div className="reactor-ring ring-outer" aria-hidden="true">
          <svg className="ring-svg" viewBox="0 0 600 600" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id={`${svgId}-outerGlow`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={palette.primary} stopOpacity="0.88" />
                <stop offset="42%" stopColor={palette.secondary} stopOpacity="0.28" />
                <stop offset="100%" stopColor={palette.dark} stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${svgId}-outerStroke`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={palette.white} />
                <stop offset="45%" stopColor={palette.primary} />
                <stop offset="100%" stopColor={palette.secondary} />
              </linearGradient>
            </defs>

            <circle cx="300" cy="300" r="252" fill="none" stroke={`url(#${svgId}-outerGlow)`} strokeWidth="28" opacity="0.75" />
            <circle cx="300" cy="300" r="234" fill="none" stroke={`url(#${svgId}-outerStroke)`} strokeWidth="2.1" strokeDasharray="18 10" opacity="0.94" />
            <circle cx="300" cy="300" r="222" fill="none" stroke={palette.primary} strokeWidth="1.4" strokeDasharray="4 12" opacity="0.35" />

            <g opacity="0.95">
              {ticks.map((tick) => (
                <line
                  key={tick.id}
                  x1="300"
                  y1="48"
                  x2="300"
                  y2={48 + tick.length}
                  stroke={palette.white}
                  strokeWidth={tick.width}
                  strokeLinecap="round"
                  opacity={tick.opacity}
                  transform={`rotate(${tick.angle} 300 300)`}
                />
              ))}
            </g>

            <g opacity="0.92">
              {markers.map((marker) => (
                <g key={marker.id} transform={`rotate(${marker.angle} 300 300)`}>
                  <circle cx="300" cy="80" r={marker.size / 2} fill={palette.primary} opacity="0.95" />
                </g>
              ))}
            </g>
          </svg>
        </div>

        <div className="reactor-ring ring-mid" aria-hidden="true">
          <svg className="ring-svg" viewBox="0 0 600 600" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id={`${svgId}-midStroke`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={palette.primary} />
                <stop offset="45%" stopColor={palette.white} />
                <stop offset="100%" stopColor={palette.secondary} />
              </linearGradient>
            </defs>

            <circle cx="300" cy="300" r="188" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="42" />
            <circle cx="300" cy="300" r="188" fill="none" stroke={`url(#${svgId}-midStroke)`} strokeWidth="2.2" strokeDasharray="28 14" opacity="0.95" />
            <circle cx="300" cy="300" r="165" fill="none" stroke={palette.primary} strokeWidth="1.8" strokeDasharray="9 10" opacity="0.42" />

            <g opacity="0.92">
              {markers.map((marker, index) => (
                <g key={`mid-${marker.id}`} transform={`rotate(${marker.angle} 300 300)`}>
                  <path d="M300 106 L309 124 L291 124 Z" fill={index % 3 === 0 ? palette.white : palette.primary} opacity="0.9" />
                </g>
              ))}
            </g>
          </svg>
        </div>

        <div className="reactor-ring ring-inner" aria-hidden="true">
          <svg className="core-svg" viewBox="0 0 600 600" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id={`${svgId}-armor`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={palette.white} />
                <stop offset="30%" stopColor={palette.primary} />
                <stop offset="100%" stopColor={palette.secondary} />
              </linearGradient>
              <radialGradient id={`${svgId}-coreGlow`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={palette.white} stopOpacity="0.96" />
                <stop offset="42%" stopColor={palette.primary} stopOpacity="0.34" />
                <stop offset="100%" stopColor={palette.dark} stopOpacity="0" />
              </radialGradient>
            </defs>

            <path d="M300 84 L424 160 L424 320 L300 396 L176 320 L176 160 Z" fill="rgba(7, 16, 28, 0.92)" stroke={`url(#${svgId}-armor)`} strokeWidth="3" strokeLinejoin="round" />
            <path d="M300 112 L396 170 L396 300 L300 356 L204 300 L204 170 Z" fill="rgba(20, 34, 52, 0.86)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M300 132 L366 172 L366 292 L300 332 L234 292 L234 172 Z" fill={`url(#${svgId}-coreGlow)`} stroke={`url(#${svgId}-armor)`} strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M300 150 L346 178 L346 280 L300 306 L254 280 L254 178 Z" fill={palette.white} opacity="0.94" />
            <path d="M300 168 L332 186 L332 264 L300 282 L268 264 L268 186 Z" fill={palette.primary} opacity="0.26" />
            <path d="M300 202 L318 212 L318 240 L300 250 L282 240 L282 212 Z" fill={palette.dark} opacity="0.88" />
          </svg>
        </div>

        <div className="energy-flares" aria-hidden="true">
          {markers.map((marker, index) => (
            <span
              key={`flare-${marker.id}`}
              className={`flare flare-${(index % 4) + 1}`}
              style={{
                transform: `translate3d(-50%, -50%, 0) rotate(${marker.angle}deg) translateY(-196px)`,
                background: isPoweredOn ? palette.primary : palette.secondary,
              }}
            />
          ))}
        </div>

        <svg className="lightning" viewBox="0 0 600 600" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
          <path d="M144 286 C196 242, 236 252, 270 286 S346 332, 402 286 S458 240, 498 286" fill="none" stroke={palette.lightning} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M118 336 C196 302, 246 318, 300 336 S404 360, 484 334" fill="none" stroke={palette.lightningSoft} strokeWidth="2" strokeLinecap="round" strokeDasharray="10 12" />
        </svg>

        <div className="lightning-soft" aria-hidden="true" />
        <div className="scanner-line" aria-hidden="true" />
        <div className="reactor-core-glow" aria-hidden="true" />

        <div className="particle-field" aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={`${pulseKey}-${particle.id}`}
              className={`particle ${isPoweredOn ? "particle-on" : "particle-off"} ${
                particle.size > 4 ? "large" : particle.size > 3 ? "medium" : "small"
              } orbiting`}
              style={{
                transform: `translate3d(-50%, -50%, 0) rotate(${particle.angle}deg) translateY(-${particle.radius}px)`,
                animationDelay: `${particle.delay}s`,
                background: isPoweredOn ? palette.primary : palette.secondary,
                "--orbit-radius": `-${particle.radius}px`,
              }}
            />
          ))}
        </div>

        <div className="mechanical-frame" aria-hidden="true">
          <svg className="frame-svg" viewBox="0 0 600 600" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id={`${svgId}-frame`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.92)" />
                <stop offset="30%" stopColor={palette.primary} />
                <stop offset="100%" stopColor={palette.secondary} />
              </linearGradient>
            </defs>

            <path d="M166 168 L220 124 L380 124 L434 168 L434 232 L406 260 L406 338 L434 366 L434 432 L380 476 L220 476 L166 432 L166 366 L194 338 L194 260 L166 232 Z" fill="none" stroke={`url(#${svgId}-frame)`} strokeWidth="2.2" strokeLinejoin="round" opacity="0.82" />
            <path d="M196 196 L230 170 L370 170 L404 196" fill="none" stroke={palette.primary} strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
            <path d="M196 404 L230 430 L370 430 L404 404" fill="none" stroke={palette.primary} strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          </svg>
        </div>

        <div className="core-symbol" aria-hidden="true">
          <svg className="core-svg" viewBox="0 0 320 320" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id={`${svgId}-centerBloom`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={palette.white} stopOpacity="0.98" />
                <stop offset="46%" stopColor={palette.primary} stopOpacity="0.28" />
                <stop offset="100%" stopColor={palette.dark} stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="160" cy="160" r="120" fill={`url(#${svgId}-centerBloom)`} opacity="0.6" />
            <polygon points="160,52 226,94 226,166 160,208 94,166 94,94" fill="rgba(10, 20, 32, 0.94)" stroke={palette.primary} strokeWidth="2.6" strokeLinejoin="round" />
            <polygon points="160,72 202,98 202,150 160,176 118,150 118,98" fill={palette.white} opacity="0.92" />
            <polygon points="160,96 186,112 186,140 160,156 134,140 134,112" fill={palette.primary} opacity="0.28" />
            <circle cx="160" cy="160" r="11" fill={palette.dark} opacity="0.9" />
          </svg>
        </div>

        <div className="reactor-status-footer" aria-hidden="true">
          <div className="reactor-status-row">
            <span className="reactor-status-dot" style={{ background: palette.statusDot }} />
            <span className="reactor-status-label">{palette.status}</span>
          </div>
          <div className="reactor-status-row">
            <span className="reactor-status-dot reactor-status-dot-alt" style={{ background: palette.primary }} />
            <span className="reactor-status-label">{isPoweredOn ? "POWER ONLINE" : "POWER DOWN"}</span>
          </div>
        </div>

        <div className="reactor-interaction-hint" aria-hidden="true">
          <span>Click: pulse</span>
          <span>Double click: toggle power</span>
        </div>
      </button>
    </section>
  );
}

export default JarvisCore;