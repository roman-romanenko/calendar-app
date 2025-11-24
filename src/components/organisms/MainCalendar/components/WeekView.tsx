import { addDays, addHours, format, isSameDay } from "date-fns";
import HoursGrid from "../../../molecules/HoursGrid";
import { useCalendarStore } from "../../../../system/store/calendar";
import { useAppTheme } from "../../../../system/helpers/hooks";
import { weekViewStyles, getDayHighlightStyle } from "../styles";
import Event from "../../../atoms/Event";
import { v4 as uuidv4 } from "uuid";

const WeekView = () => {
  const {
    selectedDate,
    currentWeekStart,
    events: allEvents,
    openModal,
  } = useCalendarStore();

  const theme = useAppTheme();
  const {
    container: weekViewContainer,
    weekHeader,
    dayLabel,
    weekGrid,
    number,
    weekCell,
  } = weekViewStyles(theme);
  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(currentWeekStart, i)
  );

  return (
    <div css={weekViewContainer}>
      {/* <div></div> */}
      <div css={weekHeader}>
        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const { dayAbbreviation, dayNumber } = getDayHighlightStyle(
            theme,
            isSelected
          );
          return (
            <div css={dayLabel} key={day.toString()}>
              <div css={dayAbbreviation}>{format(day, "EE")}</div>{" "}
              {/* day of week abbreviation */}
              <div css={[number, dayNumber]}>{format(day, "d")}</div>
            </div>
          );
        })}
      </div>

      {/* Hours grid with columns */}
      <HoursGrid
        renderHoursGrid={(index) => (
          <div css={weekGrid}>
            {days.map((day, idx) => (
              <div
                css={weekCell}
                key={idx}
                onClick={() => {
                  console.log("Day index:", { idx, day });
                  console.log("Hour index:", index);
                  console.log("Actual Date:", addHours(day, index));

                  console.log(
                    "events on this day:",
                    allEvents[format(day, "yyyy-MM-dd")] || []
                  );
                  openModal();
                }}
              >
                {allEvents[format(day, "yyyy-MM-dd")]?.map((event) => {
                  if (event.startTime.split(":")[0] !== String(index)) {
                    return null;
                  }

                  return (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(event);
                      }}
                      key={uuidv4()}
                    >
                      <Event
                        time={event.startTime}
                        comment={event.comment || ""}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default WeekView;
