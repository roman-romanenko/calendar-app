import React from "react";
import { format, addHours, startOfDay } from "date-fns";
import { useAppTheme } from "../../../system/helpers/hooks";
import { createHoursGridStyles } from "./styles";

interface HoursGridProps {
  children?: React.ReactNode;
  hours?: number;
}

const HoursGrid: React.FC<HoursGridProps> = ({ children }) => {
  const hours = Array.from({ length: 24 }, (_, i) => {
    const offsetMinutes = -new Date().getTimezoneOffset(); 
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const absMinutes = Math.abs(offsetMinutes);
    const hoursOffset = Math.floor(absMinutes / 60);
    const minsOffset = absMinutes % 60;
    // Format as "GMT+1" or "GMT+05:30"
    const gmtOffset =
      minsOffset === 0
        ? `GMT${sign}${hoursOffset}`
        : `GMT${sign}${String(hoursOffset).padStart(2, "0")}:${String(
            minsOffset
          ).padStart(2, "0")}`;

    if (i === 0) return gmtOffset; 
    return format(addHours(startOfDay(new Date()), i), "h a"); 
  });
  const theme = useAppTheme();
  const { gridContainer, timeLabelContainer, rowLine, hourLabel, hourCss } =
    createHoursGridStyles(theme);

  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      {/* Time labels */}
      <div css={timeLabelContainer}>
        {hours.map((hour, i) => (
          <div key={i} css={hourLabel}>
            <div css={hourCss}>{hour}</div>
          </div>
        ))}
      </div>

      {/* Grid lines + children overlay (events, day columns) */}
      <div css={gridContainer}>
        {hours.map((_, i) => (
          <div key={i} css={rowLine}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoursGrid;
