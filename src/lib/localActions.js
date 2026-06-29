import { spawn } from "child_process";

const allowedActions = {
  app: ({ command }) => ({
    command,
    args: [],
  }),
  website: ({ url }) => ({
    command: "cmd",
    args: ["/c", "start", "", url],
  }),
  folder: ({ path }) => ({
    command: "explorer",
    args: [path],
  }),
  system: ({ command, args = [] }) => ({
    command,
    args,
  }),
};

export function runLocalAction(action) {
  if (!action?.type || !allowedActions[action.type]) {
    throw new Error("Unsupported local action.");
  }

  const resolved = allowedActions[action.type](action);

  if (!resolved.command) {
    throw new Error("Local action is missing a command.");
  }

  const child = spawn(resolved.command, resolved.args, {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });

  child.unref();
}
