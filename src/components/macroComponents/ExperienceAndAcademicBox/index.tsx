import SeeMoreClean from '../../microComponents/SeeMoreClean';
import styles from './style.module.scss';
import { AcademicExperience } from '../../../textContent/typescript/home';

const ExperienceAndAcademicBox: React.FC<AcademicExperience> = ({
  info1,
  info2,
  info3,
  texts,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.experienceAndAcademicBox}>
      <p className={`${styles.info1} font-bigtext`}> {info1} </p>
      <p className={`${styles.info2} font-bigtext`}> {info2} </p>
      <p className={`${styles.text}`}>{texts}</p>
      {buttonText && buttonLink && (
        <SeeMoreClean
          href={buttonText}
          text={buttonLink}
          className={styles.button}
        />
      )}

      <h3 className={`${styles.info3} font-bigtext`}>{info3}</h3>
    </div>
  );
};

export default ExperienceAndAcademicBox;
