import React from 'react';
import TitleWithStar from '../../../../components/TitleWithStar/TitleWithStar';
import { ProjectsData } from '../../../../textContent/typescript/home.ts';
import styles from './style.module.scss';

const Projects: React.FC<{ data: ProjectsData }> = ({ data }) => {
  return (
    <section className={styles.projectsSection} id='projects'>
      <TitleWithStar> {data.title} </TitleWithStar>
    </section>
  );
};

export default Projects;
