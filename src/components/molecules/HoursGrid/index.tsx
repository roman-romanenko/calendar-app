import React from "react";
import { useAppTheme } from "../../../system/helpers/hooks";
import { createHoursGridStyles } from "./styles";
import { useHoursGrid } from "./hooks";

interface HoursGridProps {
  renderHoursGrid?: (index: number) => React.ReactNode;
  hours?: number;
}

const HoursGrid: React.FC<HoursGridProps> = ({ renderHoursGrid }) => {
  const { hours } = useHoursGrid();
  const theme = useAppTheme();
  const { gridContainer, timeLabelContainer, rowLine, hourLabel, hourCss } =
    createHoursGridStyles(theme);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
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
            {renderHoursGrid && renderHoursGrid(i)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoursGrid;
