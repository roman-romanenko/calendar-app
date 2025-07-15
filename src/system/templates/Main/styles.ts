import { css } from "@emotion/react";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  }),
  mainContent: css({
    display: "flex",
    height: "100%",
    // width: "100%",
  }),
  mainShifted: css({
    // marginLeft: "250px", // or whatever width your menu is
    // transition: "all 0.6s ease-in-out",
  }),
};
