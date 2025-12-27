import React from "react";
import { daysOfWeekShort } from "../../../system/helpers/constants";
import { DaysOfWeekProps } from "./types";
import { v4 as uuidv4 } from "uuid";

const DaysOfWeek: React.FC<DaysOfWeekProps> = ({
  containerStyle,
  dayStyle,
}) => (
  <div style={{ display: "flex", ...containerStyle }}>
    {daysOfWeekShort.map((day) => (
      <div
        key={uuidv4()}
        style={{
          flex: 1,
          textAlign: "center",
          fontWeight: "bold",
          ...dayStyle,
        }}
      >
        {day}
      </div>
    ))}
  </div>
);

export default DaysOfWeek;
