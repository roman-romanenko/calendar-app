import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getDateNavigationStyles = (theme: Theme) => {
  return {
    container: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: theme.spacing.md,
    }),
    todayButton: css({
      display: "inline-flex",
      alignItems: "center",
      color: theme.text,
      fontSize: theme.fontSize.md,
      height: 38,
      padding: 24,
      borderRadius: theme.borderRadius.lg,
      border: "1px solid",
      borderColor: theme.border,
    }),
    icon: css({
      color: theme.text,
    }),
  };
};
