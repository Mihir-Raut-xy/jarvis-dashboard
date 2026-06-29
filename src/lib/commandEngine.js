import { apps } from "./commands/apps";
import { websites } from "./commands/websites";
import { folders } from "./commands/folders";
import { system } from "./commands/system";

export function commandEngine(message) {
  const text = message.toLowerCase().trim();

  // ==========================
  // Confirm Destructive System Commands
  // ==========================
  for (const cmd in system) {
    const action = system[cmd];

    if (action.requiresConfirmation && text === `confirm ${cmd}`) {
      return {
        handled: true,
        reply: `Confirmed. Executing ${cmd}.`,
        action: {
          type: "system",
          command: action.command,
          args: action.args,
        },
      };
    }
  }

  // ==========================
  // Open Applications
  // ==========================
  for (const app in apps) {
    if (text.includes(`open ${app}`)) {
      return {
        handled: true,
        reply: `Opening ${app}.`,
        action: {
          type: "app",
          command: apps[app].command,
        },
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
        action: {
          type: "website",
          url: websites[site],
        },
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
        action: {
          type: "folder",
          path: folders[folder],
        },
      };
    }
  }

  // ==========================
  // System Commands
  // ==========================
  for (const cmd in system) {
    const action = system[cmd];

    if (text === cmd) {
      if (action.requiresConfirmation) {
        return {
          handled: true,
          reply: `For safety, please type "confirm ${cmd}" to ${cmd} this computer.`,
        };
      }

      return {
        handled: true,
        reply: `Executing ${cmd}.`,
        action: {
          type: "system",
          command: action.command,
          args: action.args,
        },
      };
    }
  }

  return {
    handled: false,
  };
}
