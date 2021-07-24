import React from "react";
import styles from "./NotFound.module.scss";

function NotFound(props) {
  const { history } = props;

  // setTimeout(() => {
  //   history.push("/");
  // }, 5000);

  return (
    <div className={styles.containerNotFound}>
      <h1>Not Found</h1>
      <p>404</p>
      <p>Route not found!</p>
      <img
        src="https://st3.depositphotos.com/4038693/13147/v/600/depositphotos_131474830-stock-illustration-oops-sign-in-pop-art.jpg"
        alt="Oops!"
      />
    </div>
  );
}

export default NotFound;
