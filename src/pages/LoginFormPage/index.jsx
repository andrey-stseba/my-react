import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LogInForm from '../../components/forms/LogInForm';
import styles from './LoginFormPage.module.scss';

function LoginFormPage () {
  const { url } = useRouteMatch();
  return (
    <>
      <div className={styles.loginContainer}>
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
            <Link to={`${url}/sign-up`}>
              <span>Signup</span>
            </Link>
          </div>
        </div>
        <h2>LOGIN TO YOUR ACCOUNT</h2>
        <LogInForm />
      </div>
    </>
  );
}

export default LoginFormPage;
