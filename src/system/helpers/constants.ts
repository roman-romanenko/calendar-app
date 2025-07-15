import { addDays, format } from "date-fns";
import { CalendarView } from "../store/types";

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const daysOfWeekShort = ["S", "M", "T", "W", "T", "F", "S"];
export const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const calendarView: CalendarView[] = ["month", "week", "day"];

export const mockEvents = {
  [format(new Date(), "yyyy-MM-dd")]: [
    {
      id: "1",
      date: format(new Date(), "yyyy-MM-dd"),
      startTime: "10:00",
      endTime: "11:00",
      comment: "Discuss project updates",
    },
  ],
  [format(addDays(new Date(), 2), "yyyy-MM-dd")]: [
    {
      id: "2",
      date: format(addDays(new Date(), 2), "yyyy-MM-dd"),
      startTime: "14:00",
      endTime: "15:00",
      comment: "Doctor Appointment",
    },
  ],
};
