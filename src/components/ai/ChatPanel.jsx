export default function ChatPanel() {
  return (
    <section className="glass-panel chat-panel">
      <div className="panel-header">
        <h2 className="panel-title">AI CHAT</h2>
        <button className="panel-pill" type="button">
          + New Chat
        </button>
      </div>

      <div className="chat-body">
        <div className="msg-row">
          <div className="core-dot" />
          <div className="msg-bubble">
            <div>Hello, Mihir.</div>
            <div>How can I assist you today?</div>
            <div className="msg-time">07:40 PM</div>
          </div>
        </div>

        <div className="msg-row user">
          <div className="msg-bubble user">
            <div>Show me system status</div>
            <div className="msg-time">07:40 PM ✓✓</div>
          </div>
        </div>

        <div className="msg-row">
          <div className="core-dot" />
          <div className="msg-bubble">
            <div>Here is your system status.</div>
            <div className="msg-time">07:40 PM</div>
          </div>
        </div>

        <div className="system-card">
          <div className="system-item">
            <div className="system-left">
              <span>▣</span>
              <span>CPU Usage</span>
            </div>
            <strong style={{ color: "#3ad7ff" }}>18%</strong>
          </div>

          <div className="system-item">
            <div className="system-left">
              <span>▦</span>
              <span>RAM Usage</span>
            </div>
            <strong style={{ color: "#44e29b" }}>46%</strong>
          </div>

          <div className="system-item">
            <div className="system-left">
              <span>🔋</span>
              <span>Battery</span>
            </div>
            <strong style={{ color: "#f0c245" }}>91%</strong>
          </div>

          <div className="system-item">
            <div className="system-left">
              <span>◔</span>
              <span>Network Status</span>
            </div>
            <strong style={{ color: "#9f6bff" }}>Online</strong>
          </div>
        </div>
      </div>

      <div className="input-wrap">
        <textarea className="textbox" placeholder="Ask me anything..." />
        <div className="input-actions">
          <div className="left-actions">
            <button className="action-chip" type="button">📎 Import file</button>
            <button className="action-chip" type="button">⚙ Tools</button>
          </div>

          <div className="right-actions">
            <button className="mic-btn" type="button">🎤</button>
            <button className="send-btn" type="button">↑</button>
          </div>
        </div>
      </div>
    </section>
  );
}