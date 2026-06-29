"use client";

export default function Sidebar() {
  const items = ["home", "moon", "mail", "image", "grid", "settings", "power"];

  return (
    <aside className="sidebar">
      {items.map((item, index) => (
        <button
          key={item}
          className={`sidebar-btn ${index === 0 ? "active" : ""}`}
          type="button"
          aria-label={item}
        >
          {index === 0 ? "⌂" : index === 1 ? "◔" : index === 2 ? "✉" : index === 3 ? "▣" : index === 4 ? "▦" : index === 5 ? "⚙" : "⏻"}
        </button>
      ))}

      <div className="sidebar-divider" />

      <div className="sidebar-avatar fallback-avatar">MJ</div>
    </aside>
  );
}