import React from "react";
// import Calendar from "./components/Calendar";
// import Calendar from "./components/Calendar";
import Calendar2 from "./components/Calendar2";
import CalendarMantine from "./components/CalendarMantine";
import { MantineProvider } from "@mantine/core";
// import { Calendar } from "@mantine/dates";
import "@mantine/dates/styles.css";

const App = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      {/* <Calendar/> */}
      <Calendar2/>
      {/* <MantineProvider>
        <CalendarMantine />
      </MantineProvider> */}
      <div className="flex items-center gap-3 mt-10">
        Holiday{" "}
        <div className="p-1 border-4 border-red-400 rounded-full size-1"></div>
      </div>
      <div>
        <h5>- Every Monday</h5>
        <h5>- Second Tuesday</h5>
        <h5>- Fourth Saturday</h5>
        <h5>- All Government Holidays</h5>
      </div>
    </div>
  );
};

export default App;
