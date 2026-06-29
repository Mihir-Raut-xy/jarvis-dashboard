import Header from "@/components/layout/Header";
import Background from "@/components/layout/Background";
import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/layout/Sidebar";

import JarvisCore from "@/components/ai/JarvisCore";
import ChatPanel from "@/components/ai/ChatPanel";
import StatusCards from "@/components/dashboard/StatusCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Background />

      <div className="relative z-10">
        <Header />

        <MainLayout
          sidebar={<Sidebar />}
          center={<JarvisCore />}
          right={<ChatPanel />}
          bottom={<StatusCards />}
        />
      </div>
    </main>
  );
}