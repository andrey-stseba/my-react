import React from 'react';
import { Formik, Form } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validatingSchemas';
import Input from '../Input';
import styles from './LogInForm.module.scss';

function LogInForm () {
  const loginFormInitialValues = {
    email: '',
    password: '',
  };

  const loginFormHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={loginFormInitialValues}
      onSubmit={loginFormHandleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <div className={styles.loginContainer}>
              <Input
                type='text'
                name='email'
                placeholder='Email Address'
                autofocus
              />
              <Input type='password' name='password' placeholder='Password' />
              <button type='submit' className={styles.buttonLogin}>
                Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LogInForm;
