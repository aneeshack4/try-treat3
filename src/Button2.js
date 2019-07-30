import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './Button2.treat.js';

export const Button2 = props => {
  const styles = useStyles(styleRefs);
  console.log(styles);

  return <button {...props} className={styles.button2} />;
};