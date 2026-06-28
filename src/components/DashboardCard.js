export default function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-zinc-800 p-6 hover:border-cyan-500 transition duration-300">

      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <p className={`text-3xl font-bold mt-4 ${color}`}>
        {value}
      </p>

    </div>
  );
}