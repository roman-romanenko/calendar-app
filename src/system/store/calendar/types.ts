import { CalendarView } from "../types";

export interface CalendarEvent {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  comment: string;
}

export interface CalendarState {
  currentView: CalendarView;
  currentMonth: Date;
  selectedDate: Date;
  isModalOpen: boolean;
  events: Record<string, CalendarEvent[]>; // key is date string
  editingEvent: CalendarEvent | null;
  setSelectedDate: (date: Date) => void;
  openModal: (event?: CalendarEvent) => void;
  closeModal: () => void;
  saveEvent: (event: Omit<CalendarEvent, "id"> & { id?: string }) => void;
  deleteEvent: (id: string) => void;
  setView: (view: CalendarView) => void;
}
