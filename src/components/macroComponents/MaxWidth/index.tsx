import React from 'react';
import styles from './style.module.scss';

interface MaxWidthProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

const MaxWidth: React.FC<MaxWidthProps> = ({
  style,
  className,
  children,
  ref,
}) => {
  return (
    <div className={`${styles.MaxWidth} ${className}`} style={style} ref={ref}>
      {children}
    </div>
  );
};

export default MaxWidth;
