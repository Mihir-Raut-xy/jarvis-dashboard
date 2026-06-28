"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      sender: "jarvis",
      text: "Hello Mihir. I am online. How may I assist you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const messagesEndRef = useRef(null);

  // ===========================
  // AUTO SCROLL
  // ===========================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // ===========================
  // TEXT TO SPEECH
  // ===========================
  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const preferredVoice = voices.find(
      (voice) =>
        voice.lang.startsWith("en") &&
        (voice.name.includes("Google") ||
          voice.name.includes("Microsoft") ||
          voice.name.includes("David") ||
          voice.name.includes("Zira"))
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  // ===========================
  // SEND MESSAGE
  // ===========================
  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || loading) return;

    const userMessage = messageText;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "jarvis",
          text: data.reply,
        },
      ]);

      speak(data.reply);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "jarvis",
          text: "Sorry, I couldn't contact the AI server.",
        },
      ]);
    }

    setLoading(false);
  };

  // ===========================
  // SPEECH RECOGNITION
  // ===========================
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported.\nUse Google Chrome or Microsoft Edge."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setInput(transcript);

      sendMessage(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event) => {
      setListening(false);

      if (event.error === "aborted") return;

      if (event.error === "not-allowed") {
        alert("Please allow microphone permission.");
      }

      console.log(event.error);
    };

    recognition.start();
  };

  return (
    <div className="w-96 h-[650px] bg-gray-900/60 backdrop-blur-lg border border-cyan-500 rounded-xl flex flex-col">

      {/* Header */}
      <div className="p-4 border-b border-cyan-700">
        <h2 className="text-cyan-400 text-xl font-bold">
          🤖 JARVIS AI
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "flex justify-end"
                : "flex justify-start"
            }
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-800 text-gray-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-2xl px-4 py-3 text-gray-400 animate-pulse">
              🤖 JARVIS is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>

      </div>

      {/* Input */}
      <div className="border-t border-cyan-700 p-4 flex gap-2">

        <button
          onClick={startListening}
          className={`w-12 h-12 rounded-xl text-xl transition-all ${
            listening
              ? "bg-red-500 animate-pulse"
              : "bg-cyan-500 hover:bg-cyan-400"
          }`}
        >
          🎤
        </button>

        <input
          type="text"
          value={input}
          placeholder="Ask JARVIS..."
          className="flex-1 bg-black border border-cyan-500 rounded-xl px-4 outline-none text-white"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-700 text-black font-bold px-5 rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
}