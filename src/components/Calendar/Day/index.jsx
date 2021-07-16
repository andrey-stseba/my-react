import React from "react";
import { format } from "date-fns";
import styles from "./../Calendar.module.scss";

function Day() {
  const currentDate = new Date();
  return (
    <section className={styles.containerDay}>
      <div className={styles.thisDay}>{format(currentDate, "eeee")}</div>
      <div className={styles.thisNumber}>{currentDate.getDate()}</div>
    </section>
  );
}

export default Day;
