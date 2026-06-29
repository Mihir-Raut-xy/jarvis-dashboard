"use client";

export default function MainLayout({
  sidebar,
  center,
  right,
  bottom,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Dashboard */}
      <main className="relative z-10 flex h-screen gap-8 p-8">

        {/* Sidebar */}
        <aside
          className="
            w-24
            rounded-[30px]
            border border-cyan-400/20
            bg-white/5
            backdrop-blur-3xl
            shadow-[0_0_40px_rgba(0,255,255,0.08)]
            transition-all
          "
        >
          {sidebar}
        </aside>

        {/* Main Area */}
        <section className="flex flex-1 flex-col gap-8">

          {/* Center + Chat */}
          <div className="grid flex-1 gap-8 lg:grid-cols-[1fr_430px]">

            {/* Center Panel */}
            <div
              className="
                rounded-[34px]
                border border-cyan-400/20
                bg-white/[0.04]
                backdrop-blur-3xl
                shadow-[0_0_60px_rgba(0,255,255,.08)]
                flex items-center justify-center
                overflow-hidden
              "
            >
              {center}
            </div>

            {/* Chat Panel */}
            <div
              className="
                rounded-[34px]
                border border-cyan-400/20
                bg-white/[0.04]
                backdrop-blur-3xl
                shadow-[0_0_60px_rgba(0,255,255,.08)]
                overflow-hidden
              "
            >
              {right}
            </div>

          </div>

          {/* Bottom Cards */}
          <div className="relative z-10">
            {bottom}
          </div>

        </section>

      </main>

    </div>
  );
}