import { calendarView } from "../../../system/helpers/constants";
import { CalendarView } from "../../../system/store/types";

export const useGetSelectData = ({
  currentView,
}: {
  currentView: CalendarView;
}) => {
  const options = calendarView.map((view) => ({
    value: view,
    label: view.charAt(0).toUpperCase() + view.slice(1),
  }));

  return {
    options,
    value: options.find((option) => option.value === currentView) || null,
  };
};
