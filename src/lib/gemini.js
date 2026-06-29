import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "./prompts";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(history) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing in .env.local");
  }

  const prompt = `
${SYSTEM_PROMPT}

Conversation:

${history
  .map((msg) => `${msg.role}: ${msg.text}`)
  .join("\n")}

JARVIS:
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}