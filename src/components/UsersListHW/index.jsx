import React, { Component } from "react";
import UserListItemHW from "../UserListItemHW";
import { dbUsers, imgIcons } from "./Users.js";
import styles from "./../UserListItemHW/UserListItemHW.module.css";

export default class UsersListHW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: dbUsers.map((dbUser) => ({
        ...dbUser,
        likesCount: 0,
        isSelected: false,
        isDeleted: false,
      })),
    };
  }

  mapUsers = (user, index) => {
    const { users } = this.state;
    const newUsers = [...users];

    const addLike = () => {
      newUsers[index].likesCount++;
      this.setState({ users: newUsers });
    };

    const clickUser = () => {
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({ users: newUsers });
    };

    const deleteUser = () => {
      const deleteU = new Promise((response) => {
        newUsers[index].isSelected = false;
        newUsers[index].isDeleted = !newUsers[index].isDeleted;
        this.setState({ users: newUsers });
        setTimeout(() => response(true), 220);
      });
      deleteU.then(() => {
        newUsers.splice(index, 1);
        this.setState({ users: newUsers });
      });
    };

    const handlers = { clickUser, addLike, deleteUser };

    return (
      <UserListItemHW
        key={user.id}
        user={user}
        handlers={handlers}
        imgIcons={imgIcons}
      />
    );
  };

  render() {
    const { users } = this.state;

    return (
      <article className={styles.container}>
        <ul className={styles.usersContainer}>{users.map(this.mapUsers)}</ul>
      </article>
    );
  }
}
