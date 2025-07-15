import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getEventStyles = (theme: Theme) => ({
  wrapper: css({
    position: "relative",
    height: 22,
    width: "100%",
    lineHeight: "22px",
    fontSize: theme.fontSize.xs,
    overflow: "hidden",
    textOverflow: "ellipsis",
    backgroundColor: "transparent",
    paddingLeft: 10,
    "&::before": {
      content: '""',
      display: "inline-block",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: theme.mainCalendar.selectedCircle.backgroundColor,
    },
  }),
});
