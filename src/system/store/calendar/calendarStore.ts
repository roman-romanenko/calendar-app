import { create } from "zustand";
import { format, startOfMonth, startOfWeek } from "date-fns";
import { CalendarEvent, CalendarState } from "./types";
import { mockEvents, startOfWeekOptions } from "../../helpers/constants";
import { v4 as uuidv4 } from "uuid";

export const useCalendarStore = create<CalendarState>((set, get) => ({
  currentView: "month",
  selectedDate: new Date(),
  currentMonth: startOfMonth(new Date()),
  currentWeekStart: startOfWeek(new Date(), startOfWeekOptions),
  isModalOpen: false,
  events: mockEvents,
  editingEvent: null,

  setSelectedDate: (date) => set({ selectedDate: date }),

  openModal: (event) => set({ isModalOpen: true, editingEvent: event || null }),
  closeModal: () => set({ isModalOpen: false, editingEvent: null }),
  setView: (view) => set({ currentView: view }),

  saveEvent: (eventData) => {
    const { events, selectedDate } = get();
    const dateKey = eventData.date || format(selectedDate, "yyyy-MM-dd");
    const existingEvents = events[dateKey] || [];

    let updatedEvents: CalendarEvent[];
    if (eventData.id) {
      updatedEvents = existingEvents.map((e) =>
        e.id === eventData.id ? { ...e, ...eventData } : e
      );
    } else {
      const newEvent: CalendarEvent = {
        ...eventData,
        id: uuidv4(),
      };
      updatedEvents = [...existingEvents, newEvent];
    }

    set((state) => ({
      events: { ...state.events, [dateKey]: updatedEvents },
      isModalOpen: false,
      editingEvent: null,
    }));
  },

  deleteEvent: (id) => {
    const { events } = get();
    const newEvents: Record<string, CalendarEvent[]> = {};

    for (const date in events) {
      const filtered = events[date].filter((e) => e.id !== id);
      if (filtered.length) {
        newEvents[date] = filtered;
      }
    }

    set({ events: newEvents, isModalOpen: false, editingEvent: null });
  },
}));
