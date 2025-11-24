import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const createHoursGridStyles = (theme: Theme) => {
  return {
    hoursContainer: css({
      display: "flex",
      height: "100%",
      width: "100%",
      overflowY: "scroll",
      overflowX: "hidden",
      scrollbarGutter: "stable",
    }),
    gridContainer: css({
      display: "flex",
      flexDirection: "column",
      height: "max-content",
      minHeight: "100%",
      width: "100%",
      border: `1px solid ${theme.mainCalendar.border}`,
      position: "relative",
    }),
    timeLabelContainer: css({
      display: "flex",
      flexDirection: "column",
      fontSize: 12,
      textAlign: "right",
      color: theme.text,
      userSelect: "none",
    }),
    rowLine: css({
      height: "100%",
      display: "flex",
      width: "calc(100% + 1px)",
      flex: 1,
      ":not(:first-of-type)": {
        borderTop: `1px solid ${theme.mainCalendar.border}`,
      },
    }),
    hourLabel: css({
      width: "60px",
      height: "100%",
      paddingRight: theme.spacing.sm,
      minHeight: theme.components.hoursGrid.minRowHeight,
    }),
    hourCss: css({
      transform: "translateY(-50%)",
    }),
  };
};
