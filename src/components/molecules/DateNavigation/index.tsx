import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppTheme } from "../../../system/helpers/hooks";
import { getDateNavigationStyles } from "./styles";
import {
  goToPrevMonth,
  goToNextMonth,
  goToday,
  useCalendarStore,
} from "../../../system/store";
import { getMonth } from "date-fns";
import { monthsOfYear } from "../../../system/helpers/constants";

const DateNavigation: React.FC = () => {
  const theme = useAppTheme();
  const styles = getDateNavigationStyles(theme);
  const { currentMonth } = useCalendarStore();
  const currentYear = currentMonth.getFullYear();

  return (
    <>
      <div>{monthsOfYear[getMonth(currentMonth)] + " " + currentYear}</div>
      <div css={styles.container}>
        <button onClick={goToPrevMonth}>
          <ChevronLeft css={styles.icon} />
        </button>
        <button css={styles.todayButton} onClick={goToday}>
          Today
        </button>
        <button onClick={goToNextMonth}>
          <ChevronRight css={styles.icon} />
        </button>
      </div>
    </>
  );
};

export default DateNavigation;
