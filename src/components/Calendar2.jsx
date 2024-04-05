import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const gov_holidays = [
  { name: "Republic Day", date: "2024-01-26" },
  { name: "Good Friday", date: "2024-03-29" },
  {
    name: "Chaitra Sukladi /Gudi Padava / Ugadi Cheti Chand",
    date: "2024-04-09",
  },
  { name: "Id-ul-Fitr", date: "2024-04-11" },
  { name: "Mahavir Jayanthi", date: "2024-04-21" },
  { name: "Buddha Purnima", date: "2024-05-23" },
  { name: "Id-ul-Zuha (Bakrid)", date: "2024-06-17" },
  { name: "Muharram", date: "2024-07-17" },
  { name: "Independence Day", date: "2024-08-15" },
  { name: "Ganesh Chaturthi", date: "2024-09-07" },
  {
    name: "Milad Un Nabi or ID-E-Milad (Birthday of Prophet Mohammad)",
    date: "2024-09-16",
  },
  { name: "Mahatma Gandhi's Birthday", date: "2024-10-02" },
  { name: "Dussehra [Mahanavarni]", date: "2024-10-11" },
  { name: "Dussehra (Vijay Dashmi)", date: "2024-10-12" },
  { name: "Diwali (Deepavali)", date: "2024-10-31" },
  { name: "Guru Nanak's Birthday", date: "2024-11-15" },
  { name: "Christmas Day", date: "2024-12-25" },
];

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

      // Check for government holidays
      gov_holidays.forEach((each) => {
        // console.log(
        //   currentDate.getFullYear(),
        //   parseInt(each.date.slice(0, 4)),
        //   each.date
        // );

        // return
        if (
          currentDate.getMonth() === parseInt(each.date.slice(5, 7)) &&
          currentDate.getFullYear() === parseInt(each.date.slice(0, 4)) &&
          currentDate.getDate() === parseInt(each.date.slice(8, 10))
        ) {
          style += " gov_holiday";
        }
      });

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
      <div className="mt-16 calendar">
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
                setMonth((month) => month - 1);
              }}
            />
          </button>
          <h3 className="mb-3 text-xl font-light">
            {months[month]} {year}
          </h3>
          <button className="flex items-center justify-center border rounded-full size-7 active:scale-110">
            <FaAngleRight
              className=""
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
