// Michelle

import React, { useState } from "react";
import "../styles/DatePicker.css";
import { monthNames } from "../index";
import { getSortedDays } from "../components/Days";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function range(n, i) {
  return Array.from(new Array(n)).map((a, b, c) => b + i);
}

// function med et objekt med månedernes antal dage
function getDaysOfMonth(monthIndex) {
  return {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  }[monthIndex];
}

export default function DatePicker() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentYear > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="Picker_Wrapper">
        <div className="headKalender">
          <button className="Kal_btn" onClick={prevMonth}>
            <BiLeftArrow />
          </button>
          <p>
            {monthNames[currentMonth]} {currentYear}
          </p>
          <button className="Kal_btn" onClick={nextMonth}>
            <BiRightArrow />
          </button>
        </div>
        <div className="body">
          <div className="dage">
            {getSortedDays().map((day) => (
              <p>{day}</p>
            ))}
          </div>
          <div className="dagene">
            {range(getDaysOfMonth(currentMonth), 1).map((n) => (
              <div>{n}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}; 
