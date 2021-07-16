import React from "react";

function CalendarDate(props) {
  const { date, sameMonthClass } = props;
  return <td className={sameMonthClass}>{date}</td>;
}

export default CalendarDate;
