import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppTheme } from "../../../system/helpers/hooks";
import { getDateNavigationStyles } from "./styles";
import {
  goNext,
  goPrev,
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
      <div css={styles.container}>
        <button css={styles.todayButton} onClick={goToday}>
          Today
        </button>
        <button onClick={goPrev}>
          <ChevronLeft css={styles.icon} />
        </button>
        <button onClick={goNext}>
          <ChevronRight css={styles.icon} />
        </button>
      </div>
      <div>{monthsOfYear[getMonth(currentMonth)] + " " + currentYear}</div>
    </>
  );
};

export default DateNavigation;
