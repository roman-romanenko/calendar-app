import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { useCalendarStore } from "../../../system/store";
import { getEventModalStyles } from "./eventModalStyles";
import { useAppTheme } from "../../../system/helpers/hooks";
import Select from "../../atoms/Select";

const EventModal = () => {
  const {
    selectedDate,
    isModalOpen,
    editingEvent,
    saveEvent,
    closeModal,
    deleteEvent,
  } = useCalendarStore();

  const formatTime = (hour: number, minute: number) => {
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute}`;
  };

  // const formatDuration = (minutes: number) => {
  //   if (minutes < 60) return `${minutes} min`;
  //   const hours = minutes / 60;
  //   return hours % 1 === 0 ? `${hours} h` : `${hours.toFixed(1)} h`;
  // };

  const todayDay = new Date();
  const hour = todayDay.getHours();
  const minutes = todayDay.getMinutes();

  const initialStartTime =
    minutes > 30 ? formatTime(hour + 1, 0) : formatTime(hour, 30);
  const initialEndTime =
    minutes > 30 ? formatTime(hour + 1, 30) : formatTime(hour + 1, 0);
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);
  const [comment, setComment] = useState("");

  const theme = useAppTheme();
  const styles = getEventModalStyles(theme);

  const timeOptions = useMemo(() => {
    const times: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        times.push(formatTime(h, m));
      }
    }
    console.log("Time options:", times);

    return times.map((t) => ({
      label: t,
      value: t,
    }));
  }, []);

  // const timeOptions = useMemo(() => {
  //   return Array.from({ length: 48 }, (_, i) => {
  //     const hour = Math.floor(i / 2);
  //     const minute = i % 2 === 0 ? 0 : 30;

  //     const label = `${String(hour).padStart(2, "0")}:${
  //       minute === 0 ? "00" : "30"
  //     }`;

  //     // Create ISO time value based on selectedDate
  //     const date = new Date(selectedDate);
  //     date.setHours(hour, minute, 0, 0);

  //     return {
  //       label,
  //       value: date.toISOString(),
  //     };
  //   });
  // }, [selectedDate]);

  useEffect(() => {
    setStartTime(editingEvent?.startTime || initialStartTime);
    setEndTime(editingEvent?.endTime || initialEndTime);
    setComment(editingEvent?.comment || "");
  }, [editingEvent, initialStartTime, initialEndTime]);

  if (!isModalOpen) return null;

  const handleSave = () => {
    if (!startTime || !endTime || startTime >= endTime) {
      alert("Invalid time range");
      return;
    }

    saveEvent({
      id: editingEvent?.id,
      date: format(selectedDate, "yyyy-MM-dd"),
      startTime,
      endTime,
      comment,
    });
  };

  return (
    <div css={styles.backdrop}>
      <div css={styles.modal}>
        <h3>{format(selectedDate, "PPP")}</h3>
        Start Time:
        <Select
          options={timeOptions}
          onChange={(timeOption) => setStartTime(timeOption.value)}
          value={{
            label: startTime,
            value: startTime,
          }}
        />
        End Time:
        <Select
          options={timeOptions}
          onChange={(timeOption) => setEndTime(timeOption.value)}
          value={{
            label: endTime,
            value: endTime,
          }}
        />
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            css={styles.textarea}
          />
        </label>
        <div css={styles.actions}>
          {editingEvent && (
            <button
              onClick={() => deleteEvent(editingEvent.id)}
              css={styles.delete}
            >
              Delete
            </button>
          )}
          <button onClick={handleSave}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
