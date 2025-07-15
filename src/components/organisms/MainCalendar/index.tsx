import React from "react";
import MonthView from "./components/MonthView";
import DayView from "./components/DayView";
import WeekView from "./components/WeekView";
import { useAppTheme } from "../../../system/helpers/hooks";
import { calendarStyles } from "./styles";
import { useCalendarStore } from "../../../system/store";
import { MainCalendarProps } from "./types";

const MainCalendar: React.FC<MainCalendarProps> = ({ isMenuOpen }) => {
  const { currentView } = useCalendarStore();
  const theme = useAppTheme();
  const styles = calendarStyles(theme, isMenuOpen);

  const renderView = () => {
    switch (currentView) {
      case "month":
        return <MonthView />;
      case "week":
        return <WeekView />;
      case "day":
        return <DayView />;
      default:
        return null;
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.calendarView}>{renderView()}</div>
    </div>
  );
};

export default MainCalendar;
