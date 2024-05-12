import React, { useState } from "react";
import Calendar from "./components/Calendar";
import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";

const gov_holidays = [
  { name: "Republic Day", date: "2024-01-26" },
  { name: "Good Friday", date: "2024-03-29" },
  {
    name: "Chaitra Sukladi /Gudi Padava / Ugadi Cheti Chand",
    date: "2024-04-09",
  },
  { name: "Id-ul-Fitr", date: "2024-04-11" },
  { name: "Mahavir Jayanthi", date: "2024-04-21" },
  { name: "Ambedkar Jayanthi", date: "2024-04-14" },

  { name: "Buddha Purnima", date: "2024-05-23" },
  { name: "May day", date: "2024-05-1" },
  { name: "Basava Jayanti", date: "2024-05-10" },

  { name: "Id-ul-Zuha (Bakrid)", date: "2024-06-17" },
  { name: "Muharram", date: "2024-07-17" },
  { name: "Independence Day", date: "2024-08-15" },
  { name: "Ganesh Chaturthi", date: "2024-09-07" },
  {
    name: "Milad-Un-Nabi (Birthday of Prophet Mohammad)",
    date: "2024-09-16",
  },
  { name: "Mahatma Gandhi's Birthday", date: "2024-10-02" },
  { name: "Dussehra [Mahanavarni]", date: "2024-10-11" },
  { name: "Dussehra (Vijay Dashmi)", date: "2024-10-12" },
  { name: "Diwali (Deepavali)", date: "2024-10-31" },
  { name: "Valmiki Jayanti", date: "2024-10-17" },
  { name: "Karnataka Rajotsav", date: "2024-11-1" },
  { name: "Balapadi~", date: "2024-11-2" },
  { name: "Kanakadasa Jayanti", date: "2024-11-18" },
  { name: "Christmas Day", date: "2024-12-25" },
];

const App = () => {
  const [status, setStatus] = useState("closed");
  const today = new Date();
  gov_holidays.forEach((holiday) => {
    if (
      Number(holiday.date.split("-")[0]) == today.getFullYear() &&
      Number(holiday.date.split("-")[1]) == today.getMonth() + 1 &&
      Number(holiday.date.split("-")[2]) == today.getDate()
    ) {
      setStatus("Open");
      // break;
      // console.log(
      //   Number(holiday.date.split("-")[0]),
      //   Number(holiday.date.split("-")[1]),
      //   Number(holiday.date.split("-")[2]),
      //   today.getFullYear(),
      //   today.getMonth() + 1,
      //   today.getDate()
      // );
    }
  });

  return (
    <div className="flex flex-col items-center min-h-[100vh] justify-center">
      <Analytics />

      <Helmet>
        <title>BTM Library Hours & Calendar</title>
        <meta
          name="description"
          content="Check BTM Library hours and view upcoming closures to plan your study sessions effectively."
        />
        <meta
          name="keywords"
          content="BTM library, library hours, library calendar, closures, study planning"
        />
      </Helmet>
      {/* <Schema
        orgName="BTM Library"
        openingHoursSpecification={[
          {
            dayOfWeek: [, "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30:00",
            closes: "20:00:00",
          },

          {
            dayOfWeek: [
              "Second Tuesday",
              "Forth Saturday",
              "Monday",
              "All Government holidays",
            ],
            closes: "Closed", // Indicate closure
          },
        ]}
      /> */}
      <h1 className="mb-5 text-3xl font-semibold text-center">
        Library Holidays
      </h1>
      <Calendar />
      <h1>{today.toDateString()}</h1>
      {/* <h1>Library is open today</h1> */}
      <div className="flex items-center gap-3 mt-10 mb-10">
        <div className="flex items-center gap-2">
          Holiday{" "}
          <div className="p-1 border-4 border-red-700 rounded-full size-1"></div>
        </div>
        <div className="flex items-center gap-2">
          Today{" "}
          <div className="p-1 border-4 border-indigo-700 rounded-full size-1"></div>
        </div>
        <div className="flex items-center gap-2">
          Gov Holiday{" "}
          <div className="p-1 border-4 border-green-500 rounded-full size-1"></div>
        </div>
      </div>

      {/* <div className="flex items-center gap-3 mt-10"></div> */}
      <div className="pb-10">
        <h5>
          - Every <b>Monday</b>
        </h5>
        <h5>
          - Second <b>Tuesday</b>
        </h5>
        <h5>
          - Fourth <b>Saturday</b>
        </h5>
        <h5>
          All <b>Government Holidays </b>
          <details>
            <summary>list</summary>

            <div className="ml-10 text-sm font-light">
              {gov_holidays.map(({ date, name }) => {
                return (
                  <div key={date} className="max-w-80">
                    - <span className="mr-2 font-bold">{date}</span> {name}
                  </div>
                );
              })}
            </div>
          </details>
        </h5>
        <div className="px-3 py-2 mt-5 text-center text-black bg-red-200 rounded-full">
          Made with 💖 by{"  "}
          <a
            className="underline "
            href="https://twitter.com/mohdfaizan_5/"
            target="_blank"
          >
            mohdfaizan_5
          </a>
        </div>
      </div>
      {/* <ChatBubble/> */}
      {/* <div
        role="alert"
        className="alert alert-warning bg-red-400 max-w-[55vw] flex max-h-12 mt-2 text-sm p-3 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          <b>Note:</b> Government holidays not included
        </span>
      </div> */}
    </div>
  );
};

export default App;
