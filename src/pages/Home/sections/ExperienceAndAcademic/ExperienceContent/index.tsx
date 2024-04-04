import ExperienceAndAcademicBox from '../../../../../components/macroComponents/ExperienceAndAcademicBox';
import TitleWithStar from '../../../../../components/microComponents/TitleWithStar';
import styles from './style.module.scss';

interface ExperienceContentData {
  titleReverse?: boolean;
}
const ExperienceContent: React.FC<ExperienceContentData> = ({
  titleReverse = false,
}) => {
  return (
    <div className={styles.experienceContent}>
      <TitleWithStar reverse={titleReverse}> Experiência </TitleWithStar>
      <ExperienceAndAcademicBox />
    </div>
  );
};

export default ExperienceContent;
