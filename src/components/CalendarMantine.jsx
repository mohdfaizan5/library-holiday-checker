import React from "react";
import { Calendar } from "@mantine/dates";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/dates/styles.css";

const theme = createTheme({
  // fontFamily: 'Open Sans, sans-serif',
  // primaryColor: 'cyan',
});
// const dayStyle = (date) => {
//   if (values.some((day) => isSameDate(date, day))) {
//     return {
//       backgroundColor: theme.colors.blue[0],
//       color: theme.colors.blue[9]
//     };
//   }
//   return null;
// };
// 

// firstDayOfWeek="monday"
// INstallation @modulz/radix-icons
const CalendarMantine = () => {
  return (
    <div>

        <Calendar/>
        {/* <Calendar
          initialMonth={new Date(2021, 7)}
          dayStyle={(date) =>
            date.getDay() === 5 && date.getDate() === 13
              ? { backgroundColor: theme.colors.red[9], color: theme.white }
              : null
          }
        /> */}

    </div>
  );
};

export default CalendarMantine;
