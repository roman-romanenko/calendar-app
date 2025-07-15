import React from "react";
import { format } from "date-fns";
import { useCalendarStore } from "../../../../system/store";
import { css } from "@emotion/react";
import HoursGrid from "../../../molecules/HoursGrid";

const dayViewContainer = css({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const dayHeader = css({
  display: "flex",
  paddingLeft: 60,
  borderBottom: "1px solid #ddd",
  fontWeight: 500,
  fontSize: 14,
  backgroundColor: "#f9f9f9",
  padding: "8px",
});

const dayColumn = css({
  position: "absolute",
  top: 0,
  left: 60,
  right: 0,
  bottom: 0,
  borderLeft: "1px solid #eee",
});

const DayView = () => {
  const { selectedDate } = useCalendarStore();

  return (
    <div css={dayViewContainer}>
      <div css={dayHeader}>{format(selectedDate, "EEEE, PPP")}</div>

      <HoursGrid>
        <div css={dayColumn}>{/* TODO: Add events */}</div>
      </HoursGrid>
    </div>
  );
};

export default DayView;
