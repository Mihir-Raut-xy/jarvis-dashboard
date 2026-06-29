"use client";

import { Brain, CheckCircle2, Circle, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { useEffect, useState } from "react";

export default function WelcomePanel() {
  const [greeting, setGreeting] = useState("");
  const [date, setDate] = useState("");
  const [GreetingIcon, setGreetingIcon] = useState(Sunrise);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour < 12) {
        setGreeting("Good Morning, Mihir");
        setGreetingIcon(() => Sunrise);
      } else if (hour < 17) {
        setGreeting("Good Afternoon, Mihir");
        setGreetingIcon(() => Sun);
      } else if (hour < 21) {
        setGreeting("Good Evening, Mihir");
        setGreetingIcon(() => Sunset);
      } else {
        setGreeting("Good Night, Mihir");
        setGreetingIcon(() => Moon);
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
    <div className="mb-8 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-8 backdrop-blur-xl">
      <h1 className="flex items-center gap-3 text-4xl font-bold text-white">
        <GreetingIcon className="text-cyan-300" size={34} aria-hidden="true" />
        {greeting}
      </h1>

      <p className="mt-3 text-lg text-gray-300">
        {date}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
          <Circle className="mr-2 inline fill-current" size={10} aria-hidden="true" />
          AI Online
        </span>

        <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
          <CheckCircle2 className="mr-2 inline" size={16} aria-hidden="true" />
          All Systems Operational
        </span>

        <span className="rounded-full bg-purple-500/20 px-4 py-2 text-purple-300">
          <Brain className="mr-2 inline" size={16} aria-hidden="true" />
          Memory Active
        </span>
      </div>
    </div>
  );
}
