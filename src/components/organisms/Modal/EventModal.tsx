import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useCalendarStore } from "../../../system/store";
import { getEventModalStyles } from "./eventModalStyles";
import { useAppTheme } from "../../../system/helpers/hooks";

const EventModal = () => {
  const {
    selectedDate,
    isModalOpen,
    editingEvent,
    saveEvent,
    closeModal,
    deleteEvent,
  } = useCalendarStore();

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [comment, setComment] = useState("");

  const theme = useAppTheme();
  const styles = getEventModalStyles(theme);

  useEffect(() => {
    setStartTime(editingEvent?.startTime || "");
    setEndTime(editingEvent?.endTime || "");
    setComment(editingEvent?.comment || "");
  }, [editingEvent]);

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

  const renderTimeOptions = () => {
    const times: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hour = h.toString().padStart(2, "0");
        const minute = m.toString().padStart(2, "0");
        times.push(`${hour}:${minute}`);
      }
    }
    return times.map((t) => (
      <option key={t} value={t}>
        {t}
      </option>
    ));
  };

  return (
    <div css={styles.backdrop}>
      <div css={styles.modal}>
        <h3>{format(selectedDate, "PPP")}</h3>

        <label>
          Start Time:
          <select
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            css={styles.input}
          >
            {renderTimeOptions()}
          </select>
        </label>

        <label>
          End Time:
          <select
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            css={styles.input}
          >
            {renderTimeOptions()}
          </select>
        </label>

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
