import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const calendarStyles = (theme: Theme, isMenuOpen: boolean) => {
  return {
    container: css({
      height: "100%",
      width: "100%",
      paddingLeft: isMenuOpen ? theme.components.menu.width : 0,
      transition: theme.transition,
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
