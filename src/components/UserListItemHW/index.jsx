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

// export default function UserListItemHW (props) {
//     const {
//         user: { id, firstName, lastName, age, imgSrc, likesCount, isSelected, isDeleted, },
//         imgIcons: { imgThumbUp, bin, heart, },
//         handlers: { addLike, clickElement, deleteElement, },
//     } = props;

//     function renderItemClasses() {
//         return isSelected ? `${styles.listItem} ${styles.clickedElement}` :
//         isDeleted ? `${styles.listItem} ${styles.deletedElement}` : styles.listItem;
//     }

//     return (
//         <li className={ renderItemClasses() }>
//             <div className={styles.content} onClick={clickElement}>
//                 <h2 className={styles.header}>{firstName} {lastName}</h2>
//                 <p className={styles.age}>Age: {age}</p>
//                 <img className={styles.photo} src={imgSrc} alt="userPhoto" width={320} height={270}/>
//                 <div className={styles.heartContainer}>
//                     <img src={heart} width={55} alt="heart" />
//                     <span className={styles.likesCounter}>{likesCount}</span>
//                 </div>
//             </div>
//             <img className={styles.thumbUp} src={imgThumbUp} width={45} alt="up" onClick={addLike}  />
//             <img className={styles.bin} src={bin} width={45} onClick={deleteElement}  alt="up" />
//         </li>
//     );
// };
