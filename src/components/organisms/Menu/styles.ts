import { css } from "@emotion/react";
import { Theme } from "../../../system/styles/themes";

export const menuStyles = (theme: Theme, isOpen: boolean) => {
  return {
    menuContainer: css({
      position: "fixed",
      left: 0,
      top: 64,
      width: theme.components.menu.width,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      zIndex: 99,
      transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      transition: theme.transition,
      overflow: "hidden",
      [theme.maxMedia.sm]: {
        width: "100vw",
        transform: "translateX(0)",
      },
    }),
  };
};
