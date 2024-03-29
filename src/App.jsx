import React from "react";
import Calendar2 from "./components/Calendar2";
import { Helmet } from "react-helmet";
// import { Schema } from "react-schema.org"; // Schema.org library
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
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

      {/* <h1 className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)] text-3xl font-bold" >Faizan</h1> */}
      <Calendar2 />

      <div className="flex items-center gap-3 mt-10 mb-3">
        <div className="flex items-center gap-2">
          Holiday{" "}
          <div className="p-1 border-4 border-red-700 rounded-full size-1"></div>
        </div>
        <div className="flex items-center gap-2">
          Today{" "}
          <div className="p-1 border-4 border-blue-700 rounded-full size-1"></div>
        </div>
      </div>

      {/* <div className="flex items-center gap-3 mt-10"></div> */}
      <div>
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
          - All <b>Government Holidays</b>
        </h5>
      </div>
      {/* <ChatBubble/> */}
      <div
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
      </div>
    </div>
  );
};

export default App;
