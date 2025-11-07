import React from "react";
import { format, addHours, startOfDay } from "date-fns";
import { useAppTheme } from "../../../system/helpers/hooks";
import { createHoursGridStyles } from "./styles";

interface HoursGridProps {
  children?: React.ReactNode;
  hours?: number;
}

const HoursGrid: React.FC<HoursGridProps> = ({ children }) => {
  const hours = Array.from({ length: 24 }, (_, i) =>
    format(addHours(startOfDay(new Date()), i), "HH:mm")
  );
  const theme = useAppTheme();
  const { gridContainer, timeLabelContainer, rowLine } =
    createHoursGridStyles(theme);

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
