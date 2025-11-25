import React from "react";
import { addDays, format, startOfWeek } from "date-fns";
import { css } from "@emotion/react";
import HoursGrid from "../../../molecules/HoursGrid";
import { useCalendarStore } from "../../../../system/store/calendar";

const weekViewContainer = css({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const weekHeader = css({
  display: "grid",
  gridTemplateColumns: "60px repeat(7, 1fr)", // 60px for time labels
  borderBottom: "1px solid #ddd",
  backgroundColor: "#f9f9f9",
  fontSize: 12,
  fontWeight: 500,
});

const dayLabel = css({
  padding: "8px 4px",
  textAlign: "center",
  borderLeft: "1px solid #ddd",
});

const weekGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  position: "absolute",
  top: 0,
  left: 60, // align after time column
  right: 0,
  bottom: 0,
  pointerEvents: "none",
});

const WeekView = () => {
  const { selectedDate } = useCalendarStore();
  const start = startOfWeek(selectedDate, { weekStartsOn: 1 });

  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  return (
    <div css={weekViewContainer}>
      {/* Top labels */}
      <div css={weekHeader}>
        <div /> {/* Empty for time column */}
        {days.map((day) => (
          <div css={dayLabel} key={day.toString()}>
            {format(day, "EEE dd")}
          </div>
        ))}
      </div>

      {/* Hours grid with columns */}
      <HoursGrid>
        {/* Placeholder for event blocks per day */}
        <div css={weekGrid}>
          {days.map((day, idx) => (
            <div
              key={idx}
              style={{ borderLeft: "1px solid #eee", height: "100%" }}
            />
          ))}
        </div>
      </HoursGrid>
    </div>
  );
};

export default WeekView;
