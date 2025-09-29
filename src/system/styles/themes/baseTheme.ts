import { BaseTheme } from "./types";

export const baseTheme: BaseTheme = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xxl: "28px",
  },
  zIndex: {
    modal: 1000,
    dropdown: 900,
    header: 800,
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  font: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  transition: "all 0.3s ease-in-out",
  components: {
    calendarCircle: {
      width: "24px",
      height: "24px",
      lineHeight: "24px",
      borderRadius: "50%",
    },
    menu: {
      width: 250,
    },
  },
};
