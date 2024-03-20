import React from 'react';
import styles from './style.module.scss';

interface MaxWidthProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ style = {}, children }) => {
  return (
    <div className={styles.MaxWidth} style={{ ...style }}>
      {children}
    </div>
  );
};

export default MaxWidth;
