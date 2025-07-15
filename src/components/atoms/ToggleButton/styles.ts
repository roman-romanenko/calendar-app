import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const toggleButtonStyle = (theme: Theme) =>
  css({
    backgroundColor: theme.primary,
    color: theme.text,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    border: "none",
    transition: theme.transition,

    "&:hover": {
      opacity: 0.8,
    },
  });
