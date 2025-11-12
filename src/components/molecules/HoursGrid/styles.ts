import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const createHoursGridStyles = (theme: Theme) => {
  return {
    gridContainer: css({
      display: "flex",
      flexDirection: "column",
      height: "100%",
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
      width: "100%",
      ":not(:first-of-type)": {
        borderTop: `1px solid ${theme.mainCalendar.border}`,
      },
    }),
    hourLabel: css({
      width: "60px",
      height: "100%",
      paddingRight: theme.spacing.sm,
    }),
    hourCss: css({
      transform: "translateY(-50%)",
    }),
  };
};
