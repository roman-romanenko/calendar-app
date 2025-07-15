import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getDayOfMonthStyles = (theme: Theme) => ({
  flexStyles: {
    row: css({
      display: "flex",
      // marginBottom: 4,
    }),
    cell: {
      // flex: 1,
      // padding: 8,
    },
    daysOfWeek: css({
      width: "100%",
      textAlign: "center",
    }),
  },
  tableStyles: {
    row: css({
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      borderBottom: `1px solid ${theme.mainCalendar.border}`,
      "& > *:not(:last-child)": {
        borderRight: `1px solid ${theme.mainCalendar.border}`,
      },
    }),
    cell: {
      minHeight: 80,
    },
    daysOfWeek: css({
      width: "100%",
      textAlign: "center",
    }),
  },
});
