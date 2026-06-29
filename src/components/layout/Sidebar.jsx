"use client";

import React from "react";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "⌂" },
  { key: "assistant", label: "Assistant", icon: "◌" },
  { key: "analytics", label: "Analytics", icon: "◫" },
  { key: "files", label: "Files", icon: "▦" },
  { key: "automation", label: "Automation", icon: "⟐" },
  { key: "settings", label: "Settings", icon: "⚙" },
  { key: "power", label: "Power", icon: "⏻" },
];

function Sidebar() {
  const activeKey = "dashboard";

  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="sidebar-header">
        <div className="sidebar-logo" aria-hidden="true">
          J
        </div>
        <div className="sidebar-copy">
          <p className="sidebar-label">JARVIS CONTROL</p>
          <p className="sidebar-status">Command console online</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Dashboard sections">
        {NAV_ITEMS.map((item) => {
          const active = item.key === activeKey;

          return (
            <button
              key={item.key}
              type="button"
              className={`sidebar-btn ${active ? "sidebar-btn-active" : ""}`}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <span className="sidebar-btn-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="sidebar-btn-label">{item.label}</span>
              {active ? <span className="sidebar-indicator" aria-hidden="true" /> : null}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-divider" aria-hidden="true" />

      <div className="sidebar-footer">
        <div className="sidebar-profile">
          <div className="sidebar-avatar" aria-hidden="true">
            <span className="fallback-avatar">JR</span>
          </div>

          <div className="sidebar-profile-copy">
            <p className="sidebar-profile-name">Tony Stark</p>
            <p className="sidebar-profile-role">Primary operator</p>
          </div>

          <span className="sidebar-indicator sidebar-indicator-online" aria-label="Online" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;