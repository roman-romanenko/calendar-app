import { startOfMonth } from "date-fns";
import { useCalendarStore } from ".";

export const goToday = () => {
  useCalendarStore.setState({
    currentMonth: startOfMonth(new Date()),
    selectedDate: new Date(),
  });
};

export const goToNextMonth = () => {
  useCalendarStore.setState((state) => {
    const nextMonth = new Date(state.currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return { currentMonth: startOfMonth(nextMonth) };
  });
};

export const goToPrevMonth = () => {
  useCalendarStore.setState((state) => {
    const prevMonth = new Date(state.currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    return { currentMonth: startOfMonth(prevMonth) };
  });
};
