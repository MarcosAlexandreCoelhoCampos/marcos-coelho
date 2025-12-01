import React from 'react';
import SeeMoreClean from '../../microComponents/SeeMoreClean';
import styles from './style.module.scss';
import { AcademicExperience } from '../../../textContent/typescript/home';

const ExperienceAndAcademicBox: React.FC<AcademicExperience> = ({
  info1,
  info2,
  info3,
  texts,
  info3Mobile,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className={`${styles.experienceAndAcademicBox} ${
        buttonText && buttonLink && styles.buttonExists
      }`}
    >
      <p className={`${styles.info1} font-bigtext`}> {info1} </p>
      <p className={`${styles.info2} font-bigtext`}> {info2} </p>
      <div className={styles.texts}>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      {buttonText && buttonLink && (
        <SeeMoreClean
          href={buttonLink}
          text={buttonText}
          className={styles.button}
        />
      )}

      <h3
        className={`${styles.info3} ${
          info3Mobile && styles.info3Desktop
        } font-bigtext`}
      >
        {info3}
      </h3>
      {info3Mobile && (
        <h3 className={`${styles.info3Mobile} ${styles.info3} font-bigtext`}>
          {info3Mobile}
        </h3>
      )}
    </div>
  );
};

export default ExperienceAndAcademicBox;
