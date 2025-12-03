import React from 'react';
import styles from './style.module.scss';
import {
  ptMacroComponentsData,
  enMacroComponentsData,
} from '../../../textContent/typescript/macroComponents.ts';
import userLang from '../../../functions/userLang/index.ts';

interface TitleWithStarProps {
  children: string | string[];
  reverse?: boolean;
}

const TitleWithStar: React.FC<TitleWithStarProps> = ({
  reverse = false,
  children,
}) => {
  const macroComponentsData =
    userLang === 'pt-br' ? ptMacroComponentsData : enMacroComponentsData;

  const { TitleWithStar } = macroComponentsData;
  return (
    <div
      className={`${styles.TitleWithStarContent} ${
        reverse && styles.TitleWithStarContentReverse
      }`}
    >
      <h2> {children} </h2>
      <img
        src={TitleWithStar.image.src}
        alt={TitleWithStar.image.alt}
        title={TitleWithStar.image.title}
        width={TitleWithStar.image.width}
        height={TitleWithStar.image.height}
        aria-hidden='true'
      />
    </div>
  );
};

export default TitleWithStar;
