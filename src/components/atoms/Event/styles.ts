import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getEventStyles = (theme: Theme) => ({
  wrapper: css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 24,
    width: "100%",
    backgroundColor: "transparent",
    padding: theme.spacing.xs,
    gap: theme.spacing.xs,
    cursor: "pointer",
    "&::before": {
      content: '""',
      flexShrink: 0,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: theme.mainCalendar.selectedCircle.backgroundColor,
    },
    "&:hover": {
      backgroundColor: theme.mainCalendar.event.hoverBackgroundColor,
      borderRadius: theme.borderRadius.sm,
    },
  }),
  text: css({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: theme.fontSize.xs,
    lineHeight: 1,
  }),
});
