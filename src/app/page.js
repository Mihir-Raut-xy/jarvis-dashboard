import Header from "../components/Header";
import JarvisCore from "../components/JarvisCore";
import StatusCards from "../components/StatusCards";
import ChatPanel from "../components/ChatPanel";
import Background from "../components/Background";
import SystemMonitor from "../components/SystemMonitor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Animated Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10">

        <Header />

        <div className="grid grid-cols-3 gap-8 px-8 py-8">

          {/* Left Side */}
          <div className="col-span-2 flex flex-col items-center justify-center gap-10">

            <JarvisCore />

            <button className="px-8 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
              Initialize System
            </button>
           

            <StatusCards />
            <SystemMonitor />

          </div>

          {/* Right Side */}
          <ChatPanel />

        </div>

      </div>

    </main>
  );
}