import React from 'react';
import styles from './../UserListItemHW/UserListItemHW.module.css';

export default function ButtonLikeUser (props) {
  const {
    user: { likesCount },
    handlers: { addLike },
    imgIcons: { likeUp, heart },
  } = props;

  return (
    <>
      <div className={styles.iconHeart}>
        <img src={heart} width='30px' height='30px' alt='icon' />
        <span class={styles.likeCount}>{likesCount}</span>
      </div>
      <button onClick={addLike}>
        <img
          className={styles.iconLike}
          src={likeUp}
          width='30px'
          height='30px'
          alt='icon'
        />
      </button>
    </>
  );
}
