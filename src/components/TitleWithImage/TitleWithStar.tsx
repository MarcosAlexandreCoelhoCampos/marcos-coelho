import React from 'react';
import styles from './style.module.scss';

interface TitleWithStarProps {
  reverse?: boolean;
}

const TitleWithStar: React.FC<TitleWithStarProps> = ({ reverse = false }) => {
  return (
    <div
      className={`${styles.TitleWithStarContent} ${
        reverse && styles.TitleWithStarContentReverse
      }`}
    >
      <h2> Sobre Mim </h2>
      <img
        src='/icons/stars/white/star-big-subtitle-outline-white.svg'
        alt='Contorno de estrela'
      />
    </div>
  );
};

export default TitleWithStar;
