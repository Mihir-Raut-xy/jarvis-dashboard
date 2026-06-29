export default function TickMarks() {
  const marks = [];

  for (let i = 0; i < 72; i++) {
    const angle = (i * 360) / 72;

    marks.push(
      <line
        key={i}
        x1="350"
        y1="80"
        x2="350"
        y2="96"
        stroke="#67e8f9"
        strokeWidth={i % 6 === 0 ? 3 : 1}
        opacity={i % 6 === 0 ? 0.9 : 0.3}
        transform={`rotate(${angle} 350 350)`}
      />
    );
  }

  return <>{marks}</>;
}