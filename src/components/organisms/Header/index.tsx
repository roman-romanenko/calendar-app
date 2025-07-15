import React from "react";
import DateNavigation from "../../molecules/DateNavigation";
import { headerStyles } from "./styles";
import { useAppTheme } from "../../../system/helpers/hooks";
import { useCalendarStore, useThemeStore } from "../../../system/store";
import ToggleButton from "../../atoms/ToggleButton";
import { MenuIcon } from "lucide-react";
import { HeaderProps } from "./types";
import Select from "../../atoms/Select";
import { useGetSelectData } from "./hooks";

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const theme = useAppTheme();
  const { toggleDarkMode } = useThemeStore();
  const styles = headerStyles(theme);
  const { currentView, setView } = useCalendarStore();
  const { options, value } = useGetSelectData({ currentView });

  return (
    <header css={styles.headerContainer}>
      <div css={styles.leftSection}>
        <button
          aria-label="Main menu"
          css={styles.menuButton}
          onClick={toggleMenu}
        >
          <MenuIcon css={styles.menuButton} />
        </button>
        <div css={styles.logoLink}>
          <img
            src="/public/icons/calendarIcon.svg"
            alt="Calendar Logo"
            css={styles.logo}
          />
          <span css={styles.title}>Calendar</span>
        </div>
      </div>
      <div css={styles.centerSection}>
        <DateNavigation />
      </div>
      <div css={styles.rightSection}>
        <Select
          options={options}
          value={value}
          onChange={(option) => setView(option.value)}
        />
        <ToggleButton onClick={toggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;
