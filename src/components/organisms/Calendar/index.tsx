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
// import { getEventsForDate } from "../../../system/helpers/helperFunctions";

const CalendarMenu: React.FC = () => {
  const { events: allEvents, currentMonth: month } = useCalendarStore();
  const [currentMonth, setCurrentMonth] = useState(month);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        marginBottom: 16,
      }}
    >
      <button onClick={prevMonth}>
        <ChevronLeft />
      </button>
      <h2>{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={nextMonth}>
        <ChevronRight />
      </button>
    </div>
  );

  const renderEventInfo = () => {
    const selectedDateKey = format(selectedDate, "yyyy-MM-dd");
    return (
      <div style={{ marginTop: 24 }}>
        <h3>Events on {format(selectedDate, "PPP")}</h3>
        {allEvents[selectedDateKey].length === 0 ? (
          <div>No events</div>
        ) : (
          allEvents[selectedDateKey].map((event, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: 8,
                padding: 8,
                background: "#f5f5f5",
                borderRadius: 4,
              }}
            >
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
    <div>
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
