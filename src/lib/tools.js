import { commandEngine } from "./commandEngine";

function evaluateExpression(expression) {
  let index = 0;

  const skipWhitespace = () => {
    while (/\s/.test(expression[index] ?? "")) {
      index += 1;
    }
  };

  const parseNumber = () => {
    skipWhitespace();

    let value = "";

    while (/[0-9.]/.test(expression[index] ?? "")) {
      value += expression[index];
      index += 1;
    }

    if (!value || value.split(".").length > 2) {
      throw new Error("Invalid number.");
    }

    return Number(value);
  };

  const parseFactor = () => {
    skipWhitespace();

    if (expression[index] === "-") {
      index += 1;
      return -parseFactor();
    }

    if (expression[index] === "(") {
      index += 1;
      const value = parseExpression();

      skipWhitespace();

      if (expression[index] !== ")") {
        throw new Error("Missing closing parenthesis.");
      }

      index += 1;
      return value;
    }

    return parseNumber();
  };

  const parseTerm = () => {
    let value = parseFactor();

    while (true) {
      skipWhitespace();

      if (expression[index] === "*") {
        index += 1;
        value *= parseFactor();
      } else if (expression[index] === "/") {
        index += 1;
        value /= parseFactor();
      } else {
        return value;
      }
    }
  };

  const parseExpression = () => {
    let value = parseTerm();

    while (true) {
      skipWhitespace();

      if (expression[index] === "+") {
        index += 1;
        value += parseTerm();
      } else if (expression[index] === "-") {
        index += 1;
        value -= parseTerm();
      } else {
        return value;
      }
    }
  };

  const result = parseExpression();

  skipWhitespace();

  if (index < expression.length || !Number.isFinite(result)) {
    throw new Error("Invalid expression.");
  }

  return result;
}

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
      const result = evaluateExpression(expression);

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
