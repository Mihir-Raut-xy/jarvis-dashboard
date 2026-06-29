export default function StatusCards() {
  const cards = [
    { label: "CPU", value: "18%", unit: "3.12 GHz", color: "#3ad7ff" },
    { label: "RAM", value: "46%", unit: "7.32 GB / 15.8 GB", color: "#44e29b" },
    { label: "BATTERY", value: "91%", unit: "Charging", color: "#f0c245" },
    { label: "NETWORK", value: "Online", unit: "127.0.0.1", color: "#9f6bff" },
  ];

  return (
    <section className="status-cards">
      {cards.map((card) => (
        <article key={card.label} className="stat-card">
          <div className="stat-icon" style={{ color: card.color }}>
            •
          </div>

          <div className="stat-content">
            <div className="stat-label" style={{ color: card.color }}>
              {card.label}
            </div>

            <div className="stat-value">
              <div className="stat-number">{card.value}</div>
              <div className="stat-unit">{card.unit}</div>
            </div>

            <svg className="sparkline" viewBox="0 0 120 26" fill="none">
              <path
                d="M2 14 L16 14 L28 10 L36 16 L45 8 L55 12 L65 11 L75 15 L85 9 L95 13 L108 12 L118 14"
                stroke={card.color}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </article>
      ))}
    </section>
  );
}