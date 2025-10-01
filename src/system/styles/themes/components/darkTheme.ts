import { baseTheme } from "../baseTheme";
import type { Theme } from "../types";

export const darkTheme: Theme = {
  ...baseTheme,
  mode: "dark",
  background: "#131314",
  text: "#f5f5f5",
  primary: "#90cdf4",
  border: "#333333",
  mainCalendar: {
    background: "#000",
    border: "#333537",
    selectedCircle: {
      backgroundColor: "#a8c7fa",
    },
    event: {
      hoverBackgroundColor: "rgba(221, 227, 234, 0.25)",
    },
  },
};
