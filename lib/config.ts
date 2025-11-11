import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const getGreeting = (): string => {
  if (typeof window === "undefined") return "How can I help you today?";

  const host = window.location.hostname;

  if (host.includes("stoney-cnc-chat-agent.vercel.app")) {
    return "Welcome to Stoney CNC! What can we help you with today?";
  }

  if (host.includes("cr-plasma-chat-agent.vercel.app")) {
    return "Welcome to CR PLASMA! What can we help you with today?";
  }

  return "How can I help you today?";
};

export const GREETING = getGreeting();

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 0,
      tint: 0,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f5f5f5" : "#111111",
      level: 1,
    }/*,
    surface: {
      background: theme === "dark" ? "#212121" : "#f5f5f5",
      foreground: theme === "dark" ? "#303030" : "#303030"
    } */
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
