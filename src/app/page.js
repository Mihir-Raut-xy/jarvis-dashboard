"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatusCards from "@/components/dashboard/StatusCards";
import JarvisCore from "@/components/ai/JarvisCore";
import ChatPanel from "@/components/ai/ChatPanel";

export default function Page() {
  return (
    <main className="dashboard-shell" aria-label="JARVIS dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Header />

        <section className="dashboard-content" aria-label="System overview">
          <StatusCards />

          <div className="dashboard-grid" aria-label="AI control panels">
            <div className="dashboard-panel dashboard-panel-reactor">
              <JarvisCore />
            </div>

            <div className="dashboard-panel dashboard-panel-chat">
              <ChatPanel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}