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
      transition: theme.transition,
    }),
  };
};

export const monthViewStyles = {
  container: css({
    display: "grid",
    width: "100%",
    height: "100%",
    gridAutoRows: "1fr",
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
      width: "calc(100% + 2px)",
      height: "100%",
      minHeight: theme.components.hoursGrid.minRowHeight,
      // display: "flex",
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
    }),

    weekCell: css({
      height: "100%",
      width: "100%",
      overflow: "hidden",
      ":not(:last-of-type)": {
        borderRight: `1px solid ${theme.mainCalendar.border}`,
      },
    }),

    number: css({
      height: "36px",
      width: "36px",
      lineHeight: "36px",
      fontWeight: 400,
      borderRadius: "50%",
      fontSize: theme.fontSize.xl,
      margin: "0 auto",
    }),
  };
};

export const getDayHighlightStyle = (theme: Theme, isSelected: boolean) => {
  return {
    dayNumber: css({
      backgroundColor: isSelected
        ? theme.mainCalendar.selectedCircle.backgroundColor
        : "transparent",
      color: isSelected ? theme.mainCalendar.background : theme.text,
    }),
    dayAbbreviation: css({
      color: isSelected
        ? theme.mainCalendar.selectedCircle.backgroundColor
        : theme.text,
    }),
  };
};
