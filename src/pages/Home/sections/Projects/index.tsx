import React from 'react';
import TitleWithStar from '../../../../components/macroComponents/TitleWithStar';
import { ProjectsData } from '../../../../textContent/typescript/home.ts';
import styles from './style.module.scss';
import ProjectsContent from './ProjectsContent/ProjectsContent.tsx';
import MaxWidth from '../../../../components/macroComponents/MaxWidth';

const Projects: React.FC<{ data: ProjectsData }> = ({ data }) => {
  return (
    <section className={styles.projectsSection} id='projects'>
      <MaxWidth>
        <TitleWithStar> {data.title} </TitleWithStar>
        <div className={styles.projectsContent}>
          {data.projects.map((project, index) => {
            return <ProjectsContent {...project} key={index} />;
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Projects;
