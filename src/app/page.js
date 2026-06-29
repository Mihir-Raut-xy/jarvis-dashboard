import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatusCards from "@/components/dashboard/StatusCards";
import JarvisCore from "@/components/ai/JarvisCore";
import ChatPanel from "@/components/ai/ChatPanel";

export default function Home() {
  return (
    <main className="dashboard-shell">
      <Sidebar />
      <section className="dashboard-main">
        <Header />
        <StatusCards />
        <div className="dashboard-grid">
          <JarvisCore />
          <ChatPanel />
        </div>
      </section>
    </main>
  );
}