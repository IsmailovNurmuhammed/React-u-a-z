import React from 'react';
import styles from './MyButton.module.scss';
const MyButton = ({children ,...props}) => {
  return (
    <button
      {...props}
      className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;