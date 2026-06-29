export default function HexGrid() {
  return (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}