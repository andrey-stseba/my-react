import React from "react";
import Week from "./../Week";
import { format, getWeeksInMonth, getWeek } from "date-fns";
import styles from "./../Calendar.module.scss";

const getWeeks = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeek = getWeek(firstDayOfMonth);

  const year = date.getFullYear();

  const weeks = [];
  for (let i = firstWeek; i < firstWeek + getWeeksInMonth(date); i++) {
    weeks.push(<Week key={i} week={i} year={year} date={date} />);
  }

  return weeks;
};

function Month(props) {
  const { date } = props;

  return (
    <section className={styles.containerMonth}>
      <table className={styles.containerTable}>
        {/* Получить месяц и год */}
        <caption className={styles.containerCaption}>
          {format(date, "MMMM y")}
        </caption>
        <thead className={styles.containerThead}>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{getWeeks(date)}</tbody>
      </table>
    </section>
  );
}

export default Month;
