import React from 'react';
import ExperienceAndAcademicBox from '../../../../../components/macroComponents/ExperienceAndAcademicBox';
import TitleWithStar from '../../../../../components/microComponents/TitleWithStar';
import styles from './style.module.scss';
import { ExperienceAndAcademicData } from '../../../../../textContent/typescript/home';

const ExperienceContent: React.FC<{ data: ExperienceAndAcademicData }> = ({
  data,
}) => {
  return (
    <div className={styles.experienceContainer}>
      <TitleWithStar reverse={data.titleReverse}> {data.title} </TitleWithStar>

      <div className={styles.experienceContent}>
        {data.experiences.map((experience, index) => (
          <ExperienceAndAcademicBox key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
