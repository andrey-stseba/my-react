import React, { Component } from "react";
import styles from "./UserListItemHW.module.css";

export default function UserListItemHW(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, likesCount, isSelected },
    handlers: { clickUser, addLike, deleteUser },
    imgIcons: { likeUp, redСard, heart },
  } = props;

  function userSelectClasess() {
    return isSelected
      ? `${styles.userClass} ${styles.clickedElement}`
      : styles.userClass;
  }

  return (
    <li className={userSelectClasess()}>
      <div className={styles.userBox} onClick={clickUser}>
        <img className={styles.foto} src={imgSrc} alt="foto" />
        <h2 className={styles.name}>
          {firstName} {lastName}
        </h2>
        <p className={styles.ageBox}>Возраст: {age}</p>
        <img
          className={styles.iconRedCard}
          src={redСard}
          width="50px"
          height="50px"
          alt="icon"
          onClick={deleteUser}
        />
      </div>

      <div className={styles.iconHeart}>
        <img src={heart} width="30px" height="30px" alt="icon" />
        <span class={styles.likeCount}>{likesCount}</span>
      </div>
      <img
        className={styles.iconLike}
        src={likeUp}
        width="30px"
        height="30px"
        alt="icon"
        onClick={addLike}
      />
    </li>
  );
}
