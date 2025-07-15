import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
// import { getEventsForDate } from "../../../../system/helpers/helperFunctions";
import DaysOfMonth from "../../../molecules/DaysOfMonth";
import { monthViewStyles } from "../styles";
import { useCalendarStore } from "../../../../system/store/calendar";

const MonthView = () => {
  const { selectedDate, setSelectedDate, currentMonth } = useCalendarStore();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  return (
    <div css={monthViewStyles.container}>
      <DaysOfMonth
        startDate={startDate}
        endDate={endDate}
        monthStart={monthStart}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        // getEventsForDate={getEventsForDate}
        selectedCellStyle={{}}
        outsideMonthCellStyle={{}}
        viewMode="table"
      />
    </div>
  );
};
export default MonthView;
