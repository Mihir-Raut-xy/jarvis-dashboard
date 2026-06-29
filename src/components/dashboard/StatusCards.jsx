"use client";

import React, { useMemo } from "react";

const METRICS = [
  {
    key: "cpu",
    label: "CPU",
    value: "18%",
    unit: "3.40 GHz",
    delta: "↑ +2%",
    status: "ONLINE",
    data: [24, 26, 25, 28, 31, 33, 36, 35, 39, 42, 40, 44, 47, 45, 50, 48, 52, 54],
    icon: "◉",
  },
  {
    key: "ram",
    label: "RAM",
    value: "64%",
    unit: "10.2 GB",
    delta: "↑ +4%",
    status: "OPTIMAL",
    data: [48, 50, 49, 52, 54, 53, 55, 58, 57, 60, 62, 64, 63, 66, 65, 67, 68, 70],
    icon: "▣",
  },
  {
    key: "battery",
    label: "Battery",
    value: "91%",
    unit: "Charging",
    delta: "+ AC",
    status: "CHARGING",
    data: [70, 71, 73, 72, 74, 76, 78, 80, 82, 84, 85, 87, 88, 89, 90, 90, 91, 91],
    icon: "▰",
  },
  {
    key: "network",
    label: "Network",
    value: "128 Mbps",
    unit: "Latency 12ms",
    delta: "CONNECTED",
    status: "CONNECTED",
    data: [18, 22, 20, 24, 28, 27, 30, 34, 31, 36, 38, 35, 40, 42, 39, 44, 46, 45],
    icon: "◌",
  },
];

function Sparkline({ points, accent = "49,201,255" }) {
  const path = useMemo(() => {
    const width = 120;
    const height = 36;
    const step = width / Math.max(points.length - 1, 1);
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = Math.max(max - min, 1);

    return points
      .map((point, index) => {
        const x = index * step;
        const y = height - ((point - min) / range) * height;
        return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ");
  }, [points]);

  return (
    <svg className="sparkline" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`sparkline-fill-${accent.replace(/,/g, "-")}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={`rgba(${accent}, 0.35)`} />
          <stop offset="100%" stopColor={`rgba(${accent}, 0.03)`} />
        </linearGradient>
      </defs>

      <path d={`${path} L 120 36 L 0 36 Z`} fill={`url(#sparkline-fill-${accent.replace(/,/g, "-")})`} opacity="0.75" />
      <path d={path} fill="none" stroke={`rgb(${accent})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusIndicator({ status }) {
  const toneMap = {
    ONLINE: "status-dot-online",
    OPTIMAL: "status-dot-online",
    CHARGING: "status-dot-charging",
    CONNECTED: "status-dot-online",
    WARNING: "status-dot-warning",
    LOW: "status-dot-warning",
    OFFLINE: "status-dot-offline",
  };

  return <span className={`status-dot ${toneMap[status] || "status-dot-online"}`} aria-label={status} />;
}

function StatusCard({ metric }) {
  return (
    <article className="stat-card" aria-label={`${metric.label} status`}>
      <div className="stat-header">
        <div className="stat-icon" aria-hidden="true">
          {metric.icon}
        </div>

        <StatusIndicator status={metric.status} />
      </div>

      <div className="stat-content">
        <p className="stat-label">{metric.label}</p>
        <div className="stat-value-row">
          <span className="stat-value">{metric.value}</span>
          <span className="stat-unit">{metric.unit}</span>
        </div>
        <div className="metric-footer">
          <span className="trend">{metric.delta}</span>
          <span className="metric-extra">{metric.status}</span>
        </div>
      </div>

      <div className="sparkline-wrap" aria-hidden="true">
        <Sparkline points={metric.data} />
      </div>
    </article>
  );
}

function StatusCards() {
  return (
    <section className="status-cards" aria-label="System status metrics">
      {METRICS.map((metric) => (
        <StatusCard key={metric.key} metric={metric} />
      ))}
    </section>
  );
}

export default StatusCards;