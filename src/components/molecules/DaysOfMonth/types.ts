export type DaysOfMonthProps = {
  startDate: Date;
  endDate: Date;
  monthStart: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  getEventsForDate?: (date: Date) => Array<{ title: string }>;
  cellStyle?: React.CSSProperties;
  selectedCellStyle?: React.CSSProperties;
  outsideMonthCellStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  renderDayCellContent?: (day: Date) => React.ReactNode;
  viewMode?: "flex" | "table";
};
