import React from "react";
import styles from "./../UserListItemHW/UserListItemHW.module.css";

export default function ButtonDelUser(props) {
  const {
    handlers: { deleteUser },
    imgIcons: { redСard },
  } = props;

  return (
    <button onClick={deleteUser}>
      <img
        className={styles.iconRedCard}
        src={redСard}
        width="40px"
        height="40px"
        alt="icon"
      />
    </button>
  );
}
