import React from "react";
import styles from "./PageFooter.module.scss";

function PageFooter() {
  return (
    <div className={styles.footerPageContainer}>
      <p>Training center</p>
      <p>
        by FRESHCODE{" "}
        <a
          href="https://freshcodeit.jobs/courses-web-development"
          target="_blank"
        >
          Andrey Stseba
        </a>
      </p>
    </div>
  );
}

export default PageFooter;
