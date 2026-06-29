export const system = {
  lock: {
    command: "rundll32.exe",
    args: ["user32.dll,LockWorkStation"],
  },
  shutdown: {
    command: "shutdown",
    args: ["/s", "/t", "0"],
    requiresConfirmation: true,
  },
  restart: {
    command: "shutdown",
    args: ["/r", "/t", "0"],
    requiresConfirmation: true,
  },
};
