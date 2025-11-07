import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const calendarStyles = (theme: Theme, isMenuOpen: boolean) => {
  return {
    container: css({
      height: "100%",
      width: "100%",
      paddingLeft: isMenuOpen ? theme.components.menu.width : 0,
      transition: theme.transition,
      [theme.maxMedia.sm]: {
        height: "50vh",
        paddingLeft: 0,
      },
    }),
    viewSwitcher: css({
      marginBottom: 20,
      display: "flex",
      justifyContent: "center",
    }),
    calendarView: css({
      height: "100%",
      width: "100%",
      backgroundColor: theme.mainCalendar.background,
      borderRadius: theme.borderRadius.xxl,
      border: `1px solid ${theme.border}`,
    }),
  };
};

export const monthViewStyles = {
  container: css({
    display: "grid",
    width: "100%",
    height: "100%",
  }),
};

export const weekViewStyles = (theme: Theme) => {
  return {
    container: css({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    }),

    weekHeader: css({
      display: "grid",
      gridTemplateColumns: "60px repeat(7, 1fr)",
      borderBottom: `1px solid ${theme.mainCalendar.border}`,
      fontSize: 12,
      fontWeight: 500,
    }),

    dayLabel: css({
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "8px 4px",
      textAlign: "center",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "1px",
        height: "24px",
        backgroundColor: theme.mainCalendar.border,
      },
    }),

    weekGrid: css({
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
    }),

    weekCell: css({
      borderLeft: `1px solid ${theme.mainCalendar.border}`,
    }),

    number: css({
      fontSize: 26,
      fontWeight: 400,
    }),
  };
};
