import React, { useState } from "react";
import Calendar from "./components/Calendar";
import gov_holidays from "../src/utils/gov_holidays.json";

const App = () => {
  const [status, setStatus] = useState("closed");
  const today = new Date();

  return (
    <div className="flex flex-col items-center min-h-[100vh] justify-center">
      <h1 className="mb-5 text-3xl font-semibold text-center">
        Library Holidays
      </h1>
      <Calendar />
      <h1>{today.toDateString()}</h1>
      {/* <h1>Library is open today</h1> */}
      <div className="flex items-center gap-3 mt-10 mb-10">
        <div className="flex items-center gap-2">
          <div className="p-1 border-4 border-indigo-700 rounded-full size-1"></div>
          Today{" "}
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1 border-4 border-red-700 rounded-full size-1"></div>
          Holiday{" "}
        </div>
        <div className="flex items-center gap-2">(Gov Holidays check below)</div>
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
            <summary>list👇</summary>

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
    </div>
  );
};

export default App;
