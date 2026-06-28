import { NextResponse } from "next/server";
import { exec } from "child_process";
import { askGemini } from "@/lib/gemini";
import { addFact, getMemory } from "@/lib/memory";
import { runTool } from "@/lib/tools";

let conversation = [];

export async function POST(request) {
  try {
    // ==========================
    // Read Request
    // ==========================
    const { message } = await request.json();

    if (!message || message.trim() === "") {
      return NextResponse.json(
        {
          reply: "Please enter a message.",
        },
        { status: 400 }
      );
    }

    // ==========================
    // Remember Command
    // ==========================
    if (message.toLowerCase().startsWith("remember")) {
      const fact = message
        .replace(/^remember( that)?/i, "")
        .trim();

      await addFact(fact);

      return NextResponse.json({
        reply: `Certainly, Mihir. I'll remember that ${fact}.`,
      });
    }

    // ==========================
    // Local Tools
    // ==========================
    const toolResult = await runTool(message);

    if (toolResult?.handled) {

      // Execute PC command
      if (toolResult.action) {
        exec(toolResult.action, (error) => {
          if (error) {
            console.error("Command Error:", error);
          }
        });
      }

      return NextResponse.json({
        reply: toolResult.reply,
      });
    }

    // ==========================
    // Load Memory
    // ==========================
    const memory = await getMemory();
    const facts = memory?.facts ?? [];

    // ==========================
    // Conversation History
    // ==========================
    conversation.push({
      role: "user",
      text: message,
    });

    const history = [
      {
        role: "system",
        text: `Known facts: ${facts.join(", ")}`,
      },
      ...conversation,
    ];

    // ==========================
    // Ask Gemini
    // ==========================
    const reply = await askGemini(history);

    conversation.push({
      role: "model",
      text: reply,
    });

    // Keep only last 30 messages
    if (conversation.length > 30) {
      conversation = conversation.slice(-30);
    }

    return NextResponse.json({
      reply,
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}