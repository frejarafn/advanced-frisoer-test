import { dayNames } from "..";

export const getNumberOfDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (year, month) => {
  const dayChoice = getNumberOfDaysInMonth(year, month);
  const first = dayNames.slice(dayChoice);
  return [...first, ...dayNames.slice(0, dayChoice)];
};


