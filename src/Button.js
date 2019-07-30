import * as React from 'react';
import * as styles from './Button.treat.js';

export const Button = ({ text }) => 
  <button className={styles.button}>{text}</button>
;