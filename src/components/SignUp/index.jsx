import React, { Component } from "react";
import styles from "./SignUp.module.scss";
import classNames from "classnames";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: "",
      isNameValid: false,
      emailValue: "",
      passwValue: "",
    };
  }
  handleNameChange = ({ target: { value } }) => {
    this.setState({
      nameValue: value,
      isNameValid: /^[A-Z][a-z]{2,16}(-[A-Z][a-z]{0,19})?$/.test(value),
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    const { nameValue, emailValue, passwValue, isNameValid } = this.state;
    const nameClassName = classNames(styles.inputSignUp, {
      [isNameValid ? styles.valid : styles.invalid]: nameValue,
    });
    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.labelSignUp}>
          Name
          <input
            type="text"
            className={nameClassName}
            name="nameValue"
            value={nameValue}
            placeholder="name"
            onChange={this.handleNameChange}
            required
            autoFocus
          />
        </label>
        <label className={styles.labelSignUp}>
          email
          <input
            type="email"
            className={styles.inputSignUp}
            name="emailValue"
            value={emailValue}
            placeholder="email"
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={styles.labelSignUp}>
          Password
          <input
            type="password"
            className={styles.inputSignUp}
            name="passwValue"
            value={passwValue}
            placeholder="password"
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={styles.buttonSingUp} type="submit">
          SignUp
        </button>
      </form>
    );
  }
}

export default SignUp;
