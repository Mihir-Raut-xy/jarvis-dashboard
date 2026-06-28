import fs from "fs/promises";
import path from "path";

const memoryPath = path.join(
  process.cwd(),
  "src",
  "database",
  "jarvis-memory.json"
);

// Read memory
export async function getMemory() {
  try {
    const file = await fs.readFile(memoryPath, "utf8");
    return JSON.parse(file);
  } catch (error) {
    return { facts: [] };
  }
}

// Save memory
export async function saveMemory(memory) {
  // Make sure the folder exists
  await fs.mkdir(path.dirname(memoryPath), { recursive: true });

  await fs.writeFile(
    memoryPath,
    JSON.stringify(memory, null, 2),
    "utf8"
  );
}

// Add a new fact
export async function addFact(fact) {
  const memory = await getMemory();

  const exists = memory.facts.some(
    (item) => item.toLowerCase() === fact.toLowerCase()
  );

  if (!exists) {
    memory.facts.push(fact);
    await saveMemory(memory);
  }

  return memory;
}