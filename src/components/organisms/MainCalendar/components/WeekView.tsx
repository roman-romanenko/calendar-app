import { addDays, format, startOfWeek } from "date-fns";
import HoursGrid from "../../../molecules/HoursGrid";
import { useCalendarStore } from "../../../../system/store/calendar";
import { useAppTheme } from "../../../../system/helpers/hooks";
import { weekViewStyles } from "../styles";

const WeekView = () => {
  const { selectedDate } = useCalendarStore();
  const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const theme = useAppTheme();
  const {
    container: weekViewContainer,
    weekHeader,
    dayLabel,
    weekGrid,
    number,
    weekCell,
  } = weekViewStyles(theme);
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  return (
    <div css={weekViewContainer}>
      <div></div>
      <div css={weekHeader}>
        <div />
        {days.map((day) => (
          <div css={dayLabel} key={day.toString()}>
            <span>{format(day, "EE")}</span>
            <span css={number}>{format(day, "d")}</span>
          </div>
        ))}
      </div>

      {/* Hours grid with columns */}
      <HoursGrid>
        <div css={weekGrid}>
          {days.map((day, idx) => (
            <div css={weekCell} key={idx} />
          ))}
        </div>
      </HoursGrid>
    </div>
  );
};

export default WeekView;
