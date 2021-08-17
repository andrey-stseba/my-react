import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email('Please check the format of email address')
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
      'Password confirmation needs to match original password'
    )
    .min(8)
    .max(32)
    .required(),
});

const NAME_SCHEMA = yup
  .string()
  .matches(
    /^([A-Z][a-z]{2,18})$/,
    'Name should be more than 3 characters long and start with a capital letter'
  )
  .required();
const DISPLAY_NAME_SCHEMA = yup
  .string()
  .matches(
    /^([A-Z][a-z]{4,18})$/,
    'Display name should be more than 4 characters'
  )
  .required();
const PASSWORD_SHEMA = yup
  .string()
  .matches(
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
    'Password confirmation needs to match original password'
  )
  .min(8)
  .max(32)
  .required();

export const SIGNUP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: DISPLAY_NAME_SCHEMA,
  email: yup
    .string()
    .email('Please check the format of email address')
    .required(),
  password: PASSWORD_SHEMA,
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf(
      [yup.ref('password')],
      'Password confirmation needs to match original password'
    ),
});
