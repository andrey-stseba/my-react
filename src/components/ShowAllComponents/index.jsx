import React from "react";
import PageHeader from "./../../pages/PageHeader";
import PageFooter from "./../../pages/PageFooter";
import styles from "./ShowAllComponents.module.scss";

function ShowAllComponents() {
  return (
    <div className={styles.containerAllPages}>
      <PageHeader />
      <PageFooter />
    </div>
  );
}

export default ShowAllComponents;
