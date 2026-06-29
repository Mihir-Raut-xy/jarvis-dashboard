import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";
import { addFact, getMemory } from "@/lib/memory";
import { runTool } from "@/lib/tools";
import { runLocalAction } from "@/lib/localActions";

let conversation = [];

export async function POST(request) {
  try {
    // ==========================
    // Read Request
    // ==========================
    const { message } = await request.json();
    const cleanMessage =
      typeof message === "string" ? message.trim() : "";

    if (!cleanMessage) {
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
    if (cleanMessage.toLowerCase().startsWith("remember")) {
      const fact = cleanMessage
        .replace(/^remember( that)?/i, "")
        .trim();

      if (!fact) {
        return NextResponse.json(
          {
            reply: "Tell me what to remember after the word remember.",
          },
          { status: 400 }
        );
      }

      await addFact(fact);

      return NextResponse.json({
        reply: `Certainly, Mihir. I'll remember that ${fact}.`,
      });
    }

    // ==========================
    // Local Tools
    // ==========================
    const toolResult = await runTool(cleanMessage);

    if (toolResult?.handled) {

      if (toolResult.action) {
        runLocalAction(toolResult.action);
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
      text: cleanMessage,
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
