import React from "react";
import Calendar2 from "./components/Calendar2";

const App = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <Calendar2 />

      <div className="flex items-center gap-3 mt-10">
        <div className="flex items-center gap-2">
          Holiday{" "}
          <div className="p-1 border-4 border-red-700 rounded-full size-1"></div>
        </div>
        <div className="flex items-center gap-2">
          Today{" "}
          <div className="p-1 border-4 border-blue-700 rounded-full size-1"></div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-10"></div>
      <div>
        <h5>- Every <b>Monday</b></h5>
        <h5>- Second <b>Tuesday</b></h5>
        <h5>- Fourth <b>Saturday</b></h5>
        <h5>- All <b>Government Holidays</b></h5>
      </div>
    </div>
  );
};

export default App;
