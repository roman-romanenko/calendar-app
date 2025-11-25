export type DayCellProps = {
  day: Date;
  formattedDate: string;
  isSelected: boolean;
  isCurrentMonth: boolean;
  onClick: (day: Date) => void;
  cellStyle?: React.CSSProperties;
  selectedCellStyle?: React.CSSProperties;
  outsideMonthCellStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  children?: React.ReactNode;
  isTableView?: boolean;
};
