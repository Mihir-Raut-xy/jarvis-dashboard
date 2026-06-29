export default function GlowRing({ size }) {
  return (
    <div
      className="absolute rounded-full border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.25)]"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}