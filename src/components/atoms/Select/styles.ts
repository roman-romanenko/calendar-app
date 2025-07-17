import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getSelectStyles = (theme: Theme) => ({
  wrapper: css({
    position: "relative",
    display: "inline-block",
  }),
  button: css({
    padding: "8px 16px",
    backgroundColor: theme.background,
    color: theme.text,
    border: `1px solid ${theme.border}`,
    borderRadius: theme.borderRadius.md,
    cursor: "pointer",
    fontSize: theme.fontSize.md,
    minWidth: 120,
    textAlign: "left",
  }),
  dropdown: css({
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 1000,
    backgroundColor: theme.background,
    border: `1px solid ${theme.border}`,
    borderRadius: theme.borderRadius.md,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginTop: 4,
    minWidth: 120,
    maxHeight: 300,
    overflow: "scroll",
  }),
  item: css({
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: theme.fontSize.md,
    "&:hover": {
      //   backgroundColor: theme.hover,
    },
  }),
  activeItem: css({
    fontWeight: 600,
    // backgroundColor: theme.primaryLight,
    color: theme.primary,
  }),
});
