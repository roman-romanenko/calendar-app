import React from "react";
import { MenuProps } from "./types";
import { menuStyles } from "./styles";
import { css } from "@emotion/react";
import CalendarMenu from "../Calendar";
import { useAppTheme } from "../../../system/helpers/hooks";

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const theme = useAppTheme();
  const styles = menuStyles(theme, isOpen);

  return (
    <div css={css(styles.menuContainer)}>
      <CalendarMenu />
    </div>
  );
};

export default Menu;
