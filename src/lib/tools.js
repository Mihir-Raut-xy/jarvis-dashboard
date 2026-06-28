import { commandEngine } from "./commandEngine";

export async function runTool(message) {
  const text = message.toLowerCase().trim();

  // ==========================
  // Calculator
  // ==========================
  if (text.startsWith("calculate")) {
    const expression = text.replace("calculate", "").trim();

    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      return {
        handled: true,
        reply: "Only mathematical expressions are allowed.",
      };
    }

    try {
      const result = Function(
        `"use strict"; return (${expression})`
      )();

      return {
        handled: true,
        reply: `The answer is ${result}.`,
      };
    } catch {
      return {
        handled: true,
        reply: "I couldn't calculate that expression.",
      };
    }
  }

  // ==========================
  // Command Engine
  // ==========================
  const command = commandEngine(message);

  if (command.handled) {
    return command;
  }

  // ==========================
  // Let Gemini answer everything else
  // ==========================
  return {
    handled: false,
  };
}