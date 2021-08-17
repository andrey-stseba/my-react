import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input (props) {
  const { name, ...rest } = props;
  return (
    <div className={styles.fieldContainer}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalidInput]: meta.error && meta.touched,
          });

          return <input {...field} {...rest} className={inputClassNames} />;
        }}
      </Field>
      <ErrorMessage name={name} component='div' className={styles.errorBox} />
    </div>
  );
}

export default Input;
