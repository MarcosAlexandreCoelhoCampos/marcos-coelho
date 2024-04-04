import MaxWidth from '../../../../components/macroComponents/MaxWidth';
import ExperienceContent from './ExperienceContent';
import styles from './style.module.scss';
import BoltWhiteFile from '../../../../components/svgComponents/BoltWhiteFile';

const ExperienceAndAcademic = () => {
  return (
    <section className={styles.experienceAndAcademicSection}>
      <MaxWidth>
        <div className={styles.experienceContents}>
          <ExperienceContent />
          <BoltWhiteFile fill='#ffffff' className={styles.experienceBolt} />
          <ExperienceContent />
        </div>
      </MaxWidth>
    </section>
  );
};

export default ExperienceAndAcademic;
