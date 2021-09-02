import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/forms/SignUpForm';
import styles from './SignUpFormPage.module.scss';

function SignUpPage () {
  return (
    <>
      <div className={styles.signUpContainer}>
        <div className={styles.headerPage}>
          <a href='https://www.squadhelp.com/'>
            <img
              width={190}
              src={
                'https://www.squadhelp.com/blog/wp-content/uploads/2018/04/Squadhelp_logo_white-transparent.png'
              }
            />
          </a>
          <div className={styles.linkLoginBox}>
            <Link to={`/components/login-form`}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <h2>CREATE AN ACCOUNT</h2>
        <h4>We always keep your name and email address private.</h4>
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUpPage;
