export default function ChatPanel() {
  return (
    <div className="flex h-full flex-col">

      <div className="border-b border-cyan-500/20 p-5">
        <h2 className="text-xl font-bold text-cyan-400">
          JARVIS Chat
        </h2>
      </div>

      <div className="flex-1 p-6">
        <div className="rounded-xl bg-cyan-500/10 p-4">
          Hello, Mihir.
        </div>

        <div className="mt-4 rounded-xl bg-white/5 p-4">
          I'm online and ready.
        </div>
      </div>

      <div className="border-t border-cyan-500/20 p-5">
        <input
          className="w-full rounded-xl bg-black/40 p-3 outline-none"
          placeholder="Ask JARVIS anything..."
        />
      </div>

    </div>
  );
}