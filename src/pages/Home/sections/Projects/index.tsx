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
            if (UserScreenWidthIsLargerThan1200) {
              return <ProjectBox {...project} key={index} />;
            } else if (
              (UserScreenWidthIsLargerThan768 && index < 2) ||
              seeMoreMobileActive
            ) {
              return (
                <ProjectBox
                  {...project}
                  seeMoreMobileActived={seeMoreMobileActive}
                  key={index}
                />
              );
            } else if (index < 1 || seeMoreMobileActive) {
              return (
                <ProjectBox
                  {...project}
                  seeMoreMobileActived={seeMoreMobileActive}
                  key={index}
                />
              );
            }
            <ProjectBox
              {...project}
              seeMoreMobileActived={seeMoreMobileActive}
              key={index}
            />;
          })}
        </div>
        {!UserScreenWidthIsLargerThan(1199) && (
          <SeeMoreButton
            action={() => setSeeMoreMobileActive(!seeMoreMobileActive)}
            actived={seeMoreMobileActive}
          />
        )}
      </MaxWidth>
    </section>
  );
};

export default Projects;
