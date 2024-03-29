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

    // console.log(date, month, year);
    // console.log(start,endDate, end, endDatePrev);

    for (let i = start; i > 0; i--) {
      datesHtml.push(
        <li key={`inactive-${endDatePrev - i + 1}`} className={"inactive"}>
          {endDatePrev - i + 1}
        </li>
      );
    }

    // Actual dates
    for (let i = 1; i <= endDate; i++) {
      let style = "";

      // ✅Check for second Tuesday of the month
      const currentDate = new Date(year, month, i);
      if (
        currentDate.getDay() === 2 &&
        currentDate.getDate() >= 8 &&
        currentDate.getDate() <= 14
      ) {
        style += " second-tuesday";
      }

      // ✅Check for Monday
      if (currentDate.getDay() === 1) {
        // Use currentDate.getDay() === 1
        style += " monday";
      }

      // ✅Check for fourth Saturday
      if ((i + start - 1) % 7 === 6 && (i + start) / 7 == 4) {
        style += " fourth-saturday";
      }

      // ✅Check for today
      if (
        i === date.getDate() &&
        month === date.getMonth() &&
        year === date.getFullYear()
      ) {
        style += " today";
      }

      datesHtml.push(
        <li key={i} className={style}>
          {i}
        </li>
      );
    }

    // Last dates
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
          <button className="flex items-center justify-center border rounded-full size-7 active:scale-110">
            <FaAngleLeft
              onClick={() => {
                console.log(month);
                if (month == 0) {
                  setYear((year) => year - 1);
                  setMonth(12);
                }
                setMonth((month) => month - 1);              }}
            />
          </button>
          <h3 className="mb-3 text-xl font-light">
            {months[month]} {year}
          </h3>
          <button className="flex items-center justify-center border rounded-full size-7 active:scale-110">
            <FaAngleRight className=""
              onClick={() => {
                console.log(month);
                if (month == 11) {
                  setYear((year) => year + 1);
                  setMonth(-1);
                }
                setMonth((month) => month + 1);
              }}
            />
          </button>
        </div>

        <ul className="grid grid-cols-7 w-[340px] px-2 gap-1">
          {days.map((day) => (
            <li key={`${day}day`} className={"day`"}>
              {day}
            </li>
          ))}
          {datesHtml}
        </ul>
      </div>
    );
  };

  return renderCalendar();
}

export default Calendar2;
