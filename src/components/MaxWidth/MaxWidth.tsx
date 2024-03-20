import React, { ReactNode } from 'react';
import styles from './style.module.scss';

interface MaxWidthProps {
  children: ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ children }) => {
  return <div className={styles.MaxWidth}>{children}</div>;
};

export default MaxWidth;
