import { css } from "@emotion/react";
import type { Theme } from "./themes";

export const createGlobalStyles = (theme: Theme) =>
  css({
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    html: {
      fontSize: "16px",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      height: "100%",
    },
    body: {
      fontFamily: theme.font.body,
      backgroundColor: theme.background,
      color: theme.text,
      lineHeight: 1.6,
      minHeight: "100vh",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    a: {
      color: theme.primary,
      textDecoration: "none",
    },
    "ul, ol": {
      listStyle: "none",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
      display: "block",
    },
    button: {
      fontFamily: "inherit",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: 0,
    },
    "input, select, textarea": {
      fontFamily: "inherit",
      fontSize: "inherit",
      color: "inherit",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      boxSizing: "border-box",
    },
  });
