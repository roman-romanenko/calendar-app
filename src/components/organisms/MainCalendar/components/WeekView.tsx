import { addDays, format, startOfWeek } from "date-fns";
import HoursGrid from "../../../molecules/HoursGrid";
import { useCalendarStore } from "../../../../system/store/calendar";
import { useAppTheme } from "../../../../system/helpers/hooks";
import { weekViewStyles } from "../styles";

const WeekView = () => {
  const { selectedDate } = useCalendarStore();
  const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const theme = useAppTheme();
  const {
    container: weekViewContainer,
    weekHeader,
    dayLabel,
    weekGrid,
    number,
    weekCell,
  } = weekViewStyles(theme);
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  return (
    <div css={weekViewContainer}>
      {/* <div></div> */}
      <div css={weekHeader}>
        {days.map((day) => (
          <div css={dayLabel} key={day.toString()}>
            <div>{format(day, "EE")}</div>
            <div css={number}>{format(day, "d")}</div>
          </div>
        ))}
      </div>

      {/* Hours grid with columns */}
      <HoursGrid>
        <div css={weekGrid}>
          {days.map((day, idx) => (
            <div css={weekCell} key={idx}></div>
          ))}
        </div>
      </HoursGrid>
    </div>
  );
};

export default WeekView;

// (
//   <div className="overflow-auto border rounded-2xl shadow-sm max-h-[80vh]">
//     {/* Header */}
//     <div className="grid grid-cols-8 bg-gray-100 sticky top-0 z-10">
//       <div className="p-2 font-semibold text-center border-r bg-gray-200">Time</div>
//       {days.map((day) => (
//         <div key={day} className="p-2 font-semibold text-center border-r">
//           {day}
//         </div>
//       ))}
//     </div>

//     {/* Grid body */}
//     <div className="relative">
//       {hours.map((hour) => (
//         <div key={hour} className="grid grid-cols-8 border-t h-12">
//           <div className="p-2 text-sm font-medium text-center border-r bg-gray-50">
//             {`${hour.toString().padStart(2, "0")}:00`}
//           </div>
//           {days.map((day) => (
//             <div key={`${day}-${hour}`} className="border-r relative" />
//           ))}
//         </div>
//       ))}

//       {/* Events Layer */}
//       <div className="absolute inset-0 pointer-events-none">
//         {events.map((event) => {
//           const dayIndex = days.indexOf(event.day);
//           if (dayIndex === -1) return null;

//           const top = event.startHour * 3; // 3rem per hour (h-12 = 3rem)
//           const height = event.duration * 3;

//           return (
//             <div
//               key={event.id}
//               className="absolute bg-blue-500 text-white text-sm rounded-xl shadow-md px-2 py-1 pointer-events-auto cursor-pointer hover:bg-blue-600 transition"
//               style={{
//                 left: `${(dayIndex + 1) * (100 / 8)}%`,
//                 width: `${100 / 8}%`,
//                 top: `${top}rem`,
//                 height: `${height}rem`,
//               }}
//             >
//               {event.title}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );
