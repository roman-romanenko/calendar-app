import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const createHoursGridStyles = (theme: Theme) => {
  return {
    gridContainer: css({
      display: "grid",
      gridTemplateRows: "repeat(24, 1fr)",
      height: "100%",
      width: "100%",
      borderLeft: `1px solid ${theme.mainCalendar.border}`,
      position: "relative",
    }),
    timeLabelContainer: css({
      display: "grid",
      gridTemplateRows: "repeat(24, 1fr)",
      width: 60,
      fontSize: 12,
      //   paddingRight: theme.paddingRight,
      textAlign: "right",
      color: theme.text,
      userSelect: "none",
    }),
    rowLine: css({
      borderTop: `1px solid ${theme.mainCalendar.border}`,
      height: "100%",
      width: "100%",
    }),
  };
};
