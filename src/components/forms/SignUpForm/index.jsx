import React from 'react';
import { Formik, Form } from 'formik';
import { SIGNUP_SCHEMA } from '../../../utils/validatingSchemas';
import Input from '../Input';
import styles from './SignUpForm.module.scss';
import classNames from 'classnames';

function SignUpForm () {
  const signUpFromInitialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  const signUpFormHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={signUpFromInitialValues}
      onSubmit={signUpFormHandleSubmit}
      validationSchema={SIGNUP_SCHEMA}
    >
      {formikProps => {
        const gridClass = classNames(
          styles.signUpContainer,
          styles.col,
          styles['col-xl-6'],
          styles['col-lg-6'],
          styles['col-md-6 '],
          styles['col-sm-12']
        );
        return (
          <Form>
            <div className={gridClass}>
              <Input
                type='text'
                name='firstName'
                placeholder='First name'
                autofocus
              />
              <Input type='text' name='lastName' placeholder='Last name' />
              <Input
                type='text'
                name='displayName'
                placeholder='Display Name'
              />
              <Input type='text' name='email' placeholder='email Address' />
              <Input type='password' name='password' placeholder='Password' />
              <Input
                type='password'
                name='passwordConfirmation'
                placeholder='Password Confirmation'
              />
              <button type='submit' className={styles.buttonSignUp}>
                Create account
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
export default SignUpForm;
