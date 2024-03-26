import React from 'react';
import styles from './style.module.scss';

const Banner = () => {
  return (
    <section id={styles.homeBanner}>
      <h1 className={styles.mainTitle} style={{ whiteSpace: 'pre-line' }}>
        {`  
          Desenvolvedor
          Front-End
          UX/UI Design 
        `}
      </h1>
    </section>
  );
};

export default Banner;
