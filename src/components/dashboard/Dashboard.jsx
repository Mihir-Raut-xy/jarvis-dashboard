import DashboardCard from "./DashboardCard";
import AICore from "./ai/AICore";

export default function Dashboard() {
  return (
    <section className="p-8 space-y-10">

      {/* Top Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="CPU"
          value="--%"
          color="text-cyan-400"
        />

        <DashboardCard
          title="RAM"
          value="--%"
          color="text-green-400"
        />

        <DashboardCard
          title="Battery"
          value="--%"
          color="text-yellow-400"
        />

        <DashboardCard
          title="Network"
          value="Online"
          color="text-purple-400"
        />

      </div>

      {/* AI Core */}
      <AICore />

    </section>
  );
}