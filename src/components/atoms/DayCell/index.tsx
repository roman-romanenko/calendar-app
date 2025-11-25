import { format } from "date-fns";
import { DayCellProps } from "./types";
import { CalendarEvent, useCalendarStore } from "../../../system/store";
import { useAppTheme } from "../../../system/helpers/hooks";
import { getDayCellStyles } from "./styles";
import Event from "../Event";

const DayCell: React.FC<DayCellProps> = ({
  day,
  formattedDate,
  isSelected,
  children,
  isTableView = false,
}) => {
  const theme = useAppTheme();
  const styles = getDayCellStyles(theme, isSelected);

  const { openModal, setSelectedDate, events: allEvents } = useCalendarStore();

  const dateKey = format(day, "yyyy-MM-dd");
  const events = allEvents[dateKey] || [];

  const handleDoubleClick = () => {
    setSelectedDate(day);
    openModal();
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedDate(day);
    openModal(event);
  };
  return (
    <div css={styles.wrapper} onDoubleClick={handleDoubleClick}>
      <div css={styles.circle}>{formattedDate}</div>

      <div css={{}}>
        {isTableView &&
          events.map((event) => (
            <div
              key={event.id}
              onClick={(e) => {
                e.stopPropagation();
                handleEventClick(event);
              }}
            >
              <Event time={event.startTime} comment={event.comment || ""} />
            </div>
          ))}
      </div>

      {children}
    </div>
  );
};

export default DayCell;
