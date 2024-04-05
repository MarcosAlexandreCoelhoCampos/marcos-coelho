import MaxWidth from '../../../../components/macroComponents/MaxWidth';
import ExperienceContent from './ExperienceContent';
import styles from './style.module.scss';
import { ExperienceAndAcademicData } from '../../../../textContent/typescript/home';

const ExperienceAndAcademic: React.FC<{
  data: ExperienceAndAcademicData[];
}> = ({ data }) => {
  return (
    <section className={styles.experienceAndAcademicSection}>
      <MaxWidth>
        <div className={styles.experienceContents}>
          <ExperienceContent data={data[0]} />
          <div className={styles.experienceBoltContent}>
            <img src='/icons/others/bolt-white.svg' alt='' aria-disabled />
          </div>
          <ExperienceContent data={data[1]} />
        </div>
      </MaxWidth>
    </section>
  );
};

export default ExperienceAndAcademic;
