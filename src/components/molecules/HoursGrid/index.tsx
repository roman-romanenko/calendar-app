import React from "react";
import { css } from "@emotion/react";
import { format, addHours, startOfDay } from "date-fns";

interface HoursGridProps {
  children?: React.ReactNode;
  hours?: number;
}

const gridContainer = css({
  display: "grid",
  gridTemplateRows: "repeat(24, 1fr)",
  height: "100%",
  borderLeft: "1px solid #ccc",
  position: "relative",
});

const timeLabelContainer = css({
  display: "grid",
  gridTemplateRows: "repeat(24, 1fr)",
  width: 60,
  fontSize: 12,
  paddingRight: 8,
  textAlign: "right",
  color: "#666",
  userSelect: "none",
});

const rowLine = css({
  borderTop: "1px solid #eee",
  height: "100%",
});

const HoursGrid: React.FC<HoursGridProps> = ({ children }) => {
  const hours = Array.from({ length: 24 }, (_, i) =>
    format(addHours(startOfDay(new Date()), i), "HH:mm")
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* Time labels */}
      <div css={timeLabelContainer}>
        {hours.map((hour, i) => (
          <div key={i}>{hour}</div>
        ))}
      </div>

      {/* Grid lines + children overlay (events, day columns) */}
      <div css={gridContainer}>
        {hours.map((_, i) => (
          <div key={i} css={rowLine}></div>
        ))}
        {children}
      </div>
    </div>
  );
};

export default HoursGrid;
