"use client";

import { useEffect, useState } from "react";

export default function WelcomePanel() {
    const [greeting, setGreeting] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const updateGreeting = () => {
            const now = new Date();
            const hour = now.getHours();

            if (hour < 12) {
                setGreeting("🌅 Good Morning, Mihir");
            } else if (hour < 17) {
                setGreeting("☀️ Good Afternoon, Mihir");
            } else if (hour < 21) {
                setGreeting("🌇 Good Evening, Mihir");
            } else {
                setGreeting("🌙 Good Night, Mihir");
            }

            setDate(
                now.toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            );
        };

        updateGreeting();

        const timer = setInterval(updateGreeting, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 backdrop-blur-xl p-8">
            <h1 className="text-4xl font-bold text-white">
                {greeting}
            </h1>

            <p className="text-gray-300 mt-3 text-lg">
                {date}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                    🟢 AI Online
                </span>

                <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
                    ⚡ All Systems Operational
                </span>

                <span className="rounded-full bg-purple-500/20 px-4 py-2 text-purple-300">
                    🧠 Memory Active
                </span>
            </div>
        </div>
    );
}