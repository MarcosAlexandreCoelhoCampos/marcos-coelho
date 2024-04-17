import React from 'react';
import { ProjectsData } from '../../../../textContent/typescript/home.ts';
import TitleWithStar from '../../../../components/microComponents/TitleWithStar/index';
import styles from './style.module.scss';
import ProjectBox from '../../../../components/macroComponents/ProjectBox/index';
import MaxWidth from '../../../../components/macroComponents/MaxWidth';
import UserScreenWidthIsLargerThan from '../../../../functions/UserScreenWidthIsLargerThan';
import SeeMoreButton from '../../../../components/microComponents/SeeMoreButton';

const Projects: React.FC<{ data: ProjectsData }> = ({ data }) => {
  const [seeMoreMobileActive, setSeeMoreMobileActive] = React.useState(false);
  const UserScreenWidthIsLargerThan1200 = UserScreenWidthIsLargerThan(1199);
  const UserScreenWidthIsLargerThan768 = UserScreenWidthIsLargerThan(767);
  return (
    <section className={styles.projectsSection} id='projects'>
      <MaxWidth>
        <TitleWithStar> {data.title} </TitleWithStar>
        <div className={styles.projectsContent}>
          {data.projects.map((project, index) => {
            const shouldRender =
              (UserScreenWidthIsLargerThan1200 && index < 3) ||
              (UserScreenWidthIsLargerThan768 && index < 2) ||
              index < 1 ||
              seeMoreMobileActive;

            return (
              shouldRender && (
                <ProjectBox
                  {...project}
                  seeMoreMobileActived={seeMoreMobileActive}
                  key={index}
                />
              )
            );
          })}
        </div>
        <SeeMoreButton
          action={() => setSeeMoreMobileActive(!seeMoreMobileActive)}
          actived={seeMoreMobileActive}
        />
      </MaxWidth>
    </section>
  );
};

export default Projects;
