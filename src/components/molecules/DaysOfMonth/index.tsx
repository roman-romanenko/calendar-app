import React from "react";
import { addDays, format, isSameDay, isSameMonth } from "date-fns";
import DayCell from "../../atoms/DayCell";
import { DaysOfMonthProps } from "./types";
import { getDayOfMonthStyles } from "./styles";
import { useAppTheme } from "../../../system/helpers/hooks";
import { daysOfWeek } from "../../../system/helpers/constants";

const DaysOfMonth: React.FC<DaysOfMonthProps> = ({
  startDate,
  endDate,
  monthStart,
  selectedDate,
  setSelectedDate,
  // getEventsForDate,
  cellStyle,
  selectedCellStyle = {},
  outsideMonthCellStyle = { background: "#f0f0f0", color: "#000" },
  textStyle,
  renderDayCellContent,
  viewMode = "flex",
}) => {
  const isTableView = viewMode === "table";
  const theme = useAppTheme();
  const styles =
    getDayOfMonthStyles(theme)[isTableView ? "tableStyles" : "flexStyles"];
  const rows = [];

  let day = startDate;

  while (day <= endDate) {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      const formattedDate = format(cloneDay, "d");

      days.push(
        <div key={cloneDay.toString()} css={styles.cell}>
          {isTableView && rows.length === 0 && (
            <div css={styles.daysOfWeek}>{daysOfWeek[i]}</div>
          )}
          <DayCell
            day={cloneDay}
            formattedDate={formattedDate}
            isSelected={isSameDay(cloneDay, selectedDate)}
            isCurrentMonth={isSameMonth(cloneDay, monthStart)}
            onClick={setSelectedDate}
            cellStyle={cellStyle}
            selectedCellStyle={selectedCellStyle}
            outsideMonthCellStyle={outsideMonthCellStyle}
            textStyle={textStyle}
            isTableView={isTableView}
          >
            {renderDayCellContent && renderDayCellContent(cloneDay)}
          </DayCell>
        </div>
      );

      day = addDays(day, 1);
    }

    rows.push(
      <div key={day.toString()} css={styles.row}>
        {days}
      </div>
    );
  }

  return <>{rows}</>;
};

export default DaysOfMonth;
