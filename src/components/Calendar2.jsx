import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function Calendar2() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    renderCalendar();
  }, [month, year]);

  const renderCalendar = () => {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    const datesHtml = [];

    console.log(date, month, year);
    // console.log(start,endDate, end, endDatePrev);

    for (let i = start; i > 0; i--) {
      const isMonday = (endDatePrev - i + 1) % 7 === 1;

      const style = isMonday ? "monday" : "inactive";
      datesHtml.push(
        <li key={`inactive-${endDatePrev - i + 1}`} className={"inactive"}>
          {endDatePrev - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= endDate; i++) {
      const isToday =
        i === date.getDate() &&
        month === date.getMonth() &&
        year === date.getFullYear();
      let style = isToday ? "today" : "";

      // Check for second Tuesday
      if ((i + start - 1) % 7 === 1 && (i + start) / 7 === 2) {
        style += " second-tuesday";
      }

      // Check for fourth Saturday
      if ((i + start - 1) % 7 === 6 && (i + start) / 7 >= 4) {
        style += " fourth-saturday";
      }

      datesHtml.push(
        <li key={i} className={style}>
          {i}
        </li>
      );
    }

    for (let i = end; i < 6; i++) {
      let style = "inactive";
      datesHtml.push(
        <li key={`inactive-${i + 1}`} className={style}>
          {i - end + 1}
        </li>
      );
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return (
      <div className="calendar">
        <h1 className="mb-5 text-3xl font-semibold text-center">
          Library Holidays
        </h1>

        <div className="flex justify-between">
          <button>
            <FaAngleLeft />
          </button>
          <h3 className="mb-3 text-xl font-light">
            {months[month]} {year}
          </h3>
          <button>
            <FaAngleRight />
          </button>
        </div>

        <ul className="grid grid-cols-7 w-[340px] px-2">
          {days.map((day) => (
            <li key={`${day}day`} className={"day`"}>
              {day}
            </li>
          ))}
          {datesHtml}
        </ul>
        {/* Add navigation buttons here */}
      </div>
    );
  };

  return renderCalendar();
}

export default Calendar2;
