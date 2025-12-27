import { format, addHours, startOfDay } from "date-fns";
import { useMemo } from "react";
import { getGMTOffset } from "../../../system/helpers/helperFunctions";

export const useHoursGrid = () => {
  const hours = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      if (i === 0) return getGMTOffset();
      return format(addHours(startOfDay(new Date()), i), "h a");
    });
  }, []);

  return { hours };
};
