"use client";

export default function StatusCards() {
  const cards = [
    {
      title: "CPU",
      value: "23%",
    },
    {
      title: "MEMORY",
      value: "48%",
    },
    {
      title: "NETWORK",
      value: "ONLINE",
    },
    {
      title: "AI STATUS",
      value: "ACTIVE",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 w-full max-w-3xl">

      {cards.map((card) => (
        <div
          key={card.title}
          className="border border-cyan-500 rounded-xl bg-gray-900/70 p-5"
        >
          <h3 className="text-gray-400 text-sm">
            {card.title}
          </h3>

          <p className="text-cyan-400 text-2xl font-bold mt-2">
            {card.value}
          </p>
        </div>
      ))}

    </div>
  );
}