"use client";

import React, { useEffect, useMemo, useState } from "react";

function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

function Header() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());

    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const time = useMemo(() => {
    if (!mounted || !now) return "--:--:--";
    return formatTime(now);
  }, [mounted, now]);

  const date = useMemo(() => {
    if (!mounted || !now) return "Initializing system date";
    return formatDate(now);
  }, [mounted, now]);

  const timezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone?.replace("_", " ") || "UTC",
    []
  );

  return (
    <header className="top-header" aria-label="Dashboard header">
      <div className="header-left">
        <div className="header-brand">
          <div className="header-brand-copy">
            <p className="brand-title">JARVIS</p>
            <p className="brand-subtitle">Just A Rather Very Intelligent System</p>
          </div>

          <div className="system-status" aria-label="System status">
            <span className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              Online
            </span>
            <span className="status-badge">Secure Connection</span>
            <span className="status-badge">AI Ready</span>
          </div>
        </div>
      </div>

      <div className="header-right" aria-label="Live system time and date">
        <div className="clock-wrap">
          <div className="clock-time" aria-live="polite">
            {time}
          </div>
          <div className="clock-date">{date}</div>
          <div className="timezone">{timezone}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;