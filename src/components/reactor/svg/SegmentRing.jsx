export default function SegmentRing() {
  const segments = [];

  for (let i = 0; i < 12; i++) {
    segments.push(
      <rect
        key={i}
        x="342"
        y="110"
        width="16"
        height="34"
        rx="4"
        fill="#22d3ee"
        opacity="0.75"
        transform={`rotate(${i * 30} 350 350)`}
      />
    );
  }

  return <>{segments}</>;
}