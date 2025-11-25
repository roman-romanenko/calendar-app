import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const getEventModalStyles = (theme: Theme) => ({
  backdrop: css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  }),
  modal: css({
    background: theme.background,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    width: 400,
    maxWidth: "90%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.md,
  }),
  input: css({
    padding: theme.spacing.sm,
    fontSize: theme.fontSize.md,
    border: `1px solid ${theme.border}`,
    borderRadius: theme.borderRadius.sm,
    width: "100%",
  }),
  textarea: css({
    height: 80,
    resize: "vertical",
    padding: theme.spacing.sm,
    border: `1px solid ${theme.border}`,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.fontSize.md,
    width: "100%",
  }),
  actions: css({
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing.sm,
  }),
  delete: css({
    color: "red",
    border: `1px solid red`,
    background: "transparent",
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    cursor: "pointer",
  }),
});
