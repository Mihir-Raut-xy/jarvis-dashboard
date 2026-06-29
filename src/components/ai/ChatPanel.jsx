"use client";

import React, { useMemo, useState } from "react";

const DEFAULT_MESSAGES = [
  {
    id: "msg-1",
    role: "assistant",
    name: "JARVIS",
    text: "All systems nominal. Ready for command input.",
  },
  {
    id: "msg-2",
    role: "user",
    name: "Tony",
    text: "Run a full dashboard scan.",
  },
  {
    id: "msg-3",
    role: "assistant",
    name: "JARVIS",
    text: "Scanning UI alignment, component stability, and interaction layers.",
  },
];

function ChatBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <article className={`chat-bubble ${isUser ? "chat-bubble-user" : "chat-bubble-assistant"}`}>
      <div className="chat-bubble-meta">
        <span className="chat-bubble-name">{message.name}</span>
        <span className="chat-bubble-role">{isUser ? "Operator" : "AI Core"}</span>
      </div>
      <p className="chat-bubble-text">{message.text}</p>
    </article>
  );
}

function ChatPanel() {
  const [draft, setDraft] = useState("");
  const messages = useMemo(() => DEFAULT_MESSAGES, []);

  return (
    <section className="chat-panel" aria-label="JARVIS chat panel">
      <header className="chat-header">
        <div className="chat-header-copy">
          <p className="chat-title">Conversation</p>
          <p className="chat-subtitle">Secure operator channel</p>
        </div>

        <div className="chat-live-indicator" aria-label="System connected">
          <span className="status-dot" aria-hidden="true" />
          Live
        </div>
      </header>

      <div className="chat-stream" role="log" aria-live="polite" aria-relevant="additions text">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>

      <form className="chat-composer" onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="jarvis-message">
          Enter message
        </label>

        <input
          id="jarvis-message"
          className="chat-input"
          type="text"
          value={draft}
          placeholder="Type a command..."
          onChange={(e) => setDraft(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />

        <button className="chat-send" type="submit" aria-label="Send message">
          Send
        </button>
      </form>
    </section>
  );
}

export default ChatPanel;