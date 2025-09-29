import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const calendarMenuStyles = (theme: Theme) => {
  return {
    eventsInfoContainer: css({
      marginTop: theme.spacing.lg,
      color: theme.text,
    }),
    eventsInfoItem: css({
      marginBottom: theme.spacing.sm,
      padding: theme.spacing.sm,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.primary,
    }),
    container: css({
      padding: theme.spacing.sm,
    }),
  };
};
