import ExperienceAndAcademicBox from '../../../../../components/macroComponents/ExperienceAndAcademicBox';
import TitleWithStar from '../../../../../components/microComponents/TitleWithStar';
import styles from './style.module.scss';
import { ExperienceAndAcademicData } from '../../../../../textContent/typescript/home';

const ExperienceContent: React.FC<{ data: ExperienceAndAcademicData }> = ({
  data,
}) => {
  return (
    <div className={styles.experienceContainer}>
      <TitleWithStar reverse={data.titleReverse}> Experiência </TitleWithStar>

      <div className={styles.experienceContent}>
        {data.experiences.map((experience, index) => (
          <ExperienceAndAcademicBox
            key={index}
            info1={experience.info1}
            info2={experience.info2}
            info3={experience.info3}
            texts={experience.texts}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
