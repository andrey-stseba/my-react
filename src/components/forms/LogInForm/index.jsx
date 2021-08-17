import React from 'react';
import { Formik, Form } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validatingSchemas';
import Input from '../Input';

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
            <Input
              type='text'
              name='email'
              placeholder='Email Address'
              autofocus
            />
            <Input type='password' name='password' placeholder='Password' />

            <button type='submit'>Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LogInForm;
