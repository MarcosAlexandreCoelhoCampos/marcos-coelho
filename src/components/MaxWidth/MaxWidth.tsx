import React from 'react';
import styles from './style.module.scss';

interface MaxWidthProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const MaxWidth: React.FC<MaxWidthProps> = ({ style, className, children }) => {
  return (
    <div className={`${styles.MaxWidth} ${className}`} style={{ ...style }}>
      {children}
    </div>
  );
};

export default MaxWidth;
