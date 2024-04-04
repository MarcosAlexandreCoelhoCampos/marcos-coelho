import SeeMoreClean from '../../microComponents/SeeMoreClean';
import styles from './style.module.scss';

const ExperienceAndAcademicBox = () => {
  return (
    <div className={styles.experienceAndAcademicBox}>
      <p className={`${styles.info1} font-bigtext`}> OI S&A </p>
      <p className={`${styles.info2} font-bigtext`}> 05/2023 - Momento </p>
      <p className={`${styles.text}`}>
        Minha atuação é centrada no desenvolvimento de sites, com ênfase em
        landing pages e páginas dedicadas à experiência do usuário no download
        de faturas. Essa experiência me proporcionou aprofundar meus
        conhecimentos em React, práticas de versionamento de código e obter uma
        visão ainda mais abrangente dos serviços relacionados a sites.
      </p>
      <SeeMoreClean href='#' text='Certificado' className={styles.button} />

      <h3 className={`${styles.info3} font-bigtext`}>
        Ass. De Desenvolvimento
      </h3>
    </div>
  );
};

export default ExperienceAndAcademicBox;
