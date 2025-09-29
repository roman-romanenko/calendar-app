import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DaysOfWeek from "../../molecules/DaysOfWeek";
import DaysOfMonth from "../../molecules/DaysOfMonth";
import { useCalendarStore } from "../../../system/store";
import { useAppTheme } from "../../../system/helpers/hooks";
import { calendarMenuStyles } from "./styles";
// import { getEventsForDate } from "../../../system/helpers/helperFunctions";

const CalendarMenu: React.FC = () => {
  const { events: allEvents, currentMonth: month } = useCalendarStore();
  const [currentMonth, setCurrentMonth] = useState(month);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const theme = useAppTheme();
  const styles = calendarMenuStyles(theme);

  useEffect(() => {
    setCurrentMonth(month);
  }, [month]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const nextMonth = () => setCurrentMonth(addDays(endOfMonth(currentMonth), 1));
  const prevMonth = () =>
    setCurrentMonth(addDays(startOfMonth(currentMonth), -1));

  const renderHeader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <button onClick={prevMonth}>
        <ChevronLeft color={theme.text} />
      </button>
      <h2>{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={nextMonth}>
        <ChevronRight color={theme.text} />
      </button>
    </div>
  );

  const renderEventInfo = () => {
    const selectedDateKey = format(selectedDate, "yyyy-MM-dd");
    return (
      <div css={styles.eventsInfoContainer}>
        <h3>Events on {format(selectedDate, "PPP")}</h3>
        {allEvents[selectedDateKey].length === 0 ? (
          <div>No events</div>
        ) : (
          allEvents[selectedDateKey].map((event, idx) => (
            <div key={idx} css={styles.eventsInfoItem}>
              <strong>
                {event.startTime} - {event.endTime}
              </strong>
              <div>{event.comment}</div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <div css={styles.container}>
      {renderHeader()}
      <DaysOfWeek />
      <DaysOfMonth
        startDate={startDate}
        endDate={endDate}
        monthStart={monthStart}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        // getEventsForDate={getEventsForDate}
      />
      {renderEventInfo()}
    </div>
  );
};

export default CalendarMenu;
