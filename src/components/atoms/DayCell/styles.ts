import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getDayCellStyles = (theme: Theme, isSelected: boolean) => ({
  wrapper: css({
    width: "100%",
    height: "100%",
    padding: 4,
    cursor: "pointer",
    boxSizing: "border-box",
  }),

  circle: css({
    ...theme.components.calendarCircle,
    fontSize: theme.fontSize.sm,
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isSelected
      ? theme.mainCalendar.selectedCircle.backgroundColor
      : "transparent",
    color: isSelected ? theme.mainCalendar.background : theme.text,
  }),
});
