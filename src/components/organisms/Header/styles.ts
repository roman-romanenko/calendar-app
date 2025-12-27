import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const headerStyles = (theme: Theme) => {
  return {
    headerContainer: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 55,
      minHeight: 55,
      background: "transparent",
      padding: "0 24px",
      zIndex: 100,
      [theme.maxMedia.sm]: {
        padding: theme.spacing.sm,
        flexWrap: "wrap",
        height: "auto",
        minHeight: "auto",
        rowGap: 8,
        width: "100vw",
        alignItems: "flex-start",
      },
    }),
    leftSection: css({
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0,
    }),
    menuButton: css({
      background: theme.background,
      borderRadius: "50%",
      cursor: "pointer",
      color: theme.text,
      "&:hover": {
        background: theme.background,
      },
      [theme.maxMedia.sm]: {
        display: "none",
      },
    }),
    logoLink: css({
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: theme.text,
      marginLeft: 8,
      gap: 8,
    }),
    logo: css({
      width: 32,
      height: 32,
      marginRight: 4,
    }),
    title: css({
      fontSize: 22,
      fontWeight: 500,
      fontFamily: theme.font.heading,
      letterSpacing: 0,
      color: theme.text,
      userSelect: "none",
    }),
    centerSection: css({
      display: "flex",
      alignItems: "center",
      gap: 16,
      flex: 1,
      justifyContent: "end",
      marginRight: 20,
      [theme.maxMedia.sm]: {
        display: "none",
      },
    }),
    rightSection: css({
      display: "flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0,
    }),
    profileButton: css({
      background: "none",
      border: "none",
      padding: 8,
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background 0.2s",
      "&:hover": {
        background: theme.mode === "dark" ? "#303134" : "#f1f3f4",
      },
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),
  };
};
