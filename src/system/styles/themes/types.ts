import type { Theme as EmotionTheme } from "@emotion/react";

export type ThemeSpacing = {
  xs: "4px";
  sm: "8px";
  md: "16px";
  lg: "24px";
  xl: "32px";
};

export type ThemeBorderRadius = {
  sm: "4px";
  md: "8px";
  lg: "12px";
  xxl: "28px";
};

export type ThemeZIndex = {
  modal: 1000;
  dropdown: 900;
  header: 800;
};

export type ThemeFont = {
  body: "'Inter', sans-serif";
  heading: "'Poppins', sans-serif";
};

export type ThemeFontSize = {
  xs: "12px";
  sm: "14px";
  md: "16px";
  lg: "20px";
  xl: "24px";
};

export type ThemeBreakpoints = {
  sm: "480px";
  md: "768px";
  lg: "1024px";
  xl: "1200px";
};

export type ThemeMedia<T extends Record<string, string>> = {
  minMedia: { [K in keyof T]: `@media (min-width: ${T[K]})` };
  maxMedia: { [K in keyof T]: `@media (max-width: ${T[K]})` };
};

export type BaseTheme = {
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  zIndex: ThemeZIndex;
  fontSize: ThemeFontSize;
  font: ThemeFont;
  transition: "all 0.3s ease-in-out";
  components: {
    calendarCircle: {
      width: "24px";
      height: "24px";
      lineHeight: "24px";
      borderRadius: "50%";
    };
    menu: {
      width: number;
    };
  };
  breakpoints: ThemeBreakpoints;
} & ThemeMedia<ThemeBreakpoints>;
export type ThemeMode = "light" | "dark";

export interface Theme extends BaseTheme, EmotionTheme {
  mode: ThemeMode;
  background: string;
  text: string;
  primary: string;
  border: string;
  mainCalendar: {
    background: string;
    border: string;
    selectedCircle: {
      backgroundColor: string;
    };
    event: {
      hoverBackgroundColor: string;
    };
  };
}
