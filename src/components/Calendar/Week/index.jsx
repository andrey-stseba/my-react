import { parse, addDays, isSameDay, isSameMonth } from "date-fns";
import React from "react";
import CalendarDate from "./../CalendarDate";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./../Calendar.module.scss";

const getDaysOfWeek = (date, week, year) => {
  const startOfWeek = parse(`${year} ${week}`, "Y w", new Date());

  const days = [];
  for (let i = 0; i < 7; ++i) {
    const dateIndex = addDays(startOfWeek, i);

    const sameDayClass = classNames(styles.containerTd, {
      [styles.sameDayBox]: isSameDay(new Date(), dateIndex),
    });

    isSameMonth(date, dateIndex)
      ? days.push(
          <CalendarDate
            key={dateIndex.getDate()}
            sameMonthClass={sameDayClass}
            date={dateIndex.getDate()}
          />
        )
      : days.push(
          <CalendarDate
            key={dateIndex.getDate()}
            sameMonthClass={styles.hideAnotherMonth}
            date={dateIndex.getDate()}
          />
        );
  }
  return days;
};

function Week(props) {
  const { date, week, year } = props;

  return <tr>{getDaysOfWeek(date, week, year)}</tr>;
}

Week.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  week: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Week;
