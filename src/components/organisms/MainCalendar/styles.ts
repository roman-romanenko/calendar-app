import { css, CSSObject } from "@emotion/react";
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
  const verticalBorder: CSSObject = {
    content: '""',
    position: "absolute",
    bottom: 0,
    width: "1px",
    height: "24px",
    backgroundColor: theme.mainCalendar.border,
  };

  return {
    container: css({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    }),

    weekHeader: css({
      marginLeft: "60px",
      display: "flex",
      fontSize: 12,
      fontWeight: 500,
    }),

    dayLabel: css({
      display: "flex",
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      padding: "8px 4px",
      textAlign: "center",
      position: "relative",
      width: "100%",
      "&::before": {
        ...verticalBorder,
        left: 0,
      },
      "&:last-of-type::after": {
        ...verticalBorder,
        right: 0,
      },
    }),

    weekGrid: css({
      width: "calc(100% + 1px)",
      height: "100%",
      display: "flex",
    }),

    weekCell: css({
      height: "100%",
      width: "100%",
      ":not(:last-of-type)": {
        borderRight: `1px solid ${theme.mainCalendar.border}`,
      },
    }),

    number: css({
      width: "100%",
      fontSize: 26,
      fontWeight: 400,
    }),
  };
};
