import React from 'react';
import MaxWidth from '../../../../components/macroComponents/MaxWidth';
import ExperienceContent from './ExperienceContent';
import styles from './style.module.scss';
import { ExperienceAndAcademicData } from '../../../../textContent/typescript/home';
import ComponentOnViewport from '../../../../functions/ComponentOnViewport';

const ExperienceAndAcademic: React.FC<{
  data: ExperienceAndAcademicData[];
}> = ({ data }) => {
  const experienceAndAcademicSectionRef = React.useRef<HTMLElement>(null);

  return (
    <section
      className={styles.experienceAndAcademicSection}
      ref={experienceAndAcademicSectionRef}
      id='experience'
    >
      <MaxWidth
        className={`animeOpacityPreparation ${
          ComponentOnViewport(experienceAndAcademicSectionRef) && 'animeOpacity'
        }`}
      >
        <div className={styles.experienceContents}>
          <ExperienceContent data={data[0]} />
          <div className={styles.experienceBoltContent}>
            <div className={styles.experienceBoltImage} />
          </div>
          <ExperienceContent data={data[1]} />
        </div>
      </MaxWidth>
    </section>
  );
};

export default ExperienceAndAcademic;
