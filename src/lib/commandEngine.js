import { apps } from "./commands/apps";
import { websites } from "./commands/websites";
import { folders } from "./commands/folders";
import { system } from "./commands/system";

export function commandEngine(message) {
  const text = message.toLowerCase().trim();

  // ==========================
  // Open Applications
  // ==========================
  for (const app in apps) {
    if (text.includes(`open ${app}`)) {
      return {
        handled: true,
        reply: `Opening ${app}.`,
        action: apps[app],
      };
    }
  }

  // ==========================
  // Open Websites
  // ==========================
  for (const site in websites) {
    if (text.includes(`open ${site}`)) {
      return {
        handled: true,
        reply: `Opening ${site}.`,
        action: `start ${websites[site]}`,
      };
    }
  }

  // ==========================
  // Open Folders
  // ==========================
  for (const folder in folders) {
    if (text.includes(`open ${folder}`)) {
      return {
        handled: true,
        reply: `Opening ${folder}.`,
        action: `explorer ${folders[folder]}`,
      };
    }
  }

  // ==========================
  // System Commands
  // ==========================
  for (const cmd in system) {
    if (text === cmd) {
      return {
        handled: true,
        reply: `Executing ${cmd}.`,
        action: system[cmd],
      };
    }
  }

  return {
    handled: false,
  };
}