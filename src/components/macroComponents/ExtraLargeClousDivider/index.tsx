import React from 'react';
import styles from './style.module.scss';

const ExtraLargeClousDivider: React.FC<{ style: React.CSSProperties }> = ({
  style,
}) => {
  return (
    <div className={styles.ExtraLargeClousDivider} style={style}>
      <div className={styles.ExtraLargeClousContent}>
        <img
          src='./icons/cloud/extra-large/extra-large-cloud-white.svg'
          alt=''
          aria-hidden='true'
          title=''
          width={1747}
          height={298}
          className={styles.ExtraLargeClousImages}
        />
        <img
          src='./icons/cloud/extra-large/extra-large-cloud-white.svg'
          alt=''
          aria-hidden='true'
          title=''
          width={1747}
          height={298}
          className={styles.ExtraLargeClousImages}
        />
        <img
          src='./icons/cloud/extra-large/extra-large-cloud-white.svg'
          alt=''
          aria-hidden='true'
          title=''
          width={1747}
          height={298}
          className={styles.ExtraLargeClousImages}
        />
        <img
          src='./icons/cloud/extra-large/extra-large-cloud-white.svg'
          alt=''
          aria-hidden='true'
          title=''
          width={1747}
          height={298}
          className={styles.ExtraLargeClousImages}
        />
      </div>
    </div>
  );
};

export default ExtraLargeClousDivider;
