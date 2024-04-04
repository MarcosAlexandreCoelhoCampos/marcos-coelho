import MaxWidth from '../../../../components/macroComponents/MaxWidth';
import ExperienceContent from './ExperienceContent';
import styles from './style.module.scss';

const ExperienceAndAcademic = () => {
  return (
    <section className={styles.experienceAndAcademicSection}>
      <MaxWidth>
        <div className={styles.experienceContents}>
          <ExperienceContent />
          <p>RAIO</p>
          <ExperienceContent />
        </div>
      </MaxWidth>
    </section>
  );
};

export default ExperienceAndAcademic;
