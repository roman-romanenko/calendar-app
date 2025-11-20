import { addDays, addWeeks, startOfMonth, startOfWeek } from "date-fns";
import { useCalendarStore } from ".";
import { startOfWeekOptions } from "../../helpers/constants";

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

export const goToNextWeek = () => {
  useCalendarStore.setState((state) => {
    const nextWeekStart = addWeeks(state.currentWeekStart, 1);
    return {
      currentWeekStart: nextWeekStart,
      currentMonth: startOfMonth(nextWeekStart),
    };
  });
};

export const goToPrevWeek = () => {
  useCalendarStore.setState((state) => {
    const prevWeekStart = addWeeks(state.currentWeekStart, -1);
    return {
      currentWeekStart: prevWeekStart,
      currentMonth: startOfMonth(prevWeekStart),
    };
  });
};

export const goToday = () => {
  const today = new Date();
  useCalendarStore.setState({
    currentMonth: startOfMonth(today),
    selectedDate: today,
    currentWeekStart: startOfWeek(today, startOfWeekOptions),
  });
};

export const goToNextDay = () => {
  useCalendarStore.setState((state) => {
    const nextDay = addDays(state.selectedDate, 1);
    return {
      currentWeekStart: startOfWeek(nextDay, startOfWeekOptions),
      currentMonth: startOfMonth(nextDay),
    };
  });
};

export const goToPrevDay = () => {
  useCalendarStore.setState((state) => {
    const prevDay = addDays(state.selectedDate, -1);
    return {
      currentWeekStart: startOfWeek(prevDay, startOfWeekOptions),
      currentMonth: startOfMonth(prevDay),
    };
  });
};

export const goNext = () => {
  const view = useCalendarStore.getState().currentView;

  switch (view) {
    case "month":
      goToNextMonth();
      break;
    case "week":
      goToNextWeek();
      break;
    case "day":
      goToNextDay();
      break;
  }
};

export const goPrev = () => {
  const view = useCalendarStore.getState().currentView;

  switch (view) {
    case "month":
      goToPrevMonth();
      break;
    case "week":
      goToPrevWeek();
      break;
    case "day":
      goToPrevDay();
      break;
  }
};
