import { baseTheme } from "../baseTheme";
import type { Theme } from "../types";

export const lightTheme: Theme = {
  ...baseTheme,
  mode: "light",
  background: "#e9eef6",
  text: "#111111",
  primary: "#007bff",
  border: "#e0e0e0",
  mainCalendar: {
    background: "#fff",
    border: "#dde3ea",
    selectedCircle: {
      backgroundColor: "#0b57d0",
    },
  },
};
