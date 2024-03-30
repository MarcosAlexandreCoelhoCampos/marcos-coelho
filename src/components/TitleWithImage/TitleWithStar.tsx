import React from 'react';
import styles from './style.module.scss';

interface TitleWithStarProps {
  children: string;
  reverse?: boolean;
}

const TitleWithStar: React.FC<TitleWithStarProps> = ({
  reverse = false,
  children,
}) => {
  return (
    <div
      className={`${styles.TitleWithStarContent} ${
        reverse && styles.TitleWithStarContentReverse
      }`}
    >
      <h2> {children} </h2>
      <img
        src='/icons/stars/white/star-big-subtitle-outline-white.svg'
        alt='Contorno de estrela'
      />
    </div>
  );
};

export default TitleWithStar;
