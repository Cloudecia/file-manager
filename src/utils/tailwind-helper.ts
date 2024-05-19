import tailwindConfig from "../../tailwind.config.js";

export function getBreakpointsValues() {
  return tailwindConfig.theme.screens;
}
