import React, { Component } from "react";
import styles from "./UserListItemHW.module.css";
import ButtonDelUser from "../ButtonDelUser";
import ButtonLikeUser from "../ButtonLikeUser";

export default function UserListItemHW(props) {
  const { user, handlers, imgIcons } = props;

  function userSelectClasess() {
    return user.isSelected
      ? `${styles.userClass} ${styles.clickedElement}`
      : styles.userClass;
  }

  return (
    <li className={userSelectClasess()}>
      <div className={styles.userBox} onClick={handlers.clickUser}>
        <img className={styles.foto} src={user.imgSrc} alt="foto" />
        <h2 className={styles.name}>
          {user.firstName} {user.lastName}
        </h2>
        <p className={styles.ageBox}>Возраст: {user.age}</p>
        <ButtonDelUser handlers={handlers} imgIcons={imgIcons} />
      </div>
      <ButtonLikeUser user={user} handlers={handlers} imgIcons={imgIcons} />
    </li>
  );
}
