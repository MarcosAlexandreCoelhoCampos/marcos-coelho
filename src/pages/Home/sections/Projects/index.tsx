import React from 'react';
import TitleWithStar from '../../../../components/macroComponents/TitleWithStar';
import { ProjectsData } from '../../../../textContent/typescript/home.ts';
import styles from './style.module.scss';
import ProjectsContent from './ProjectContent';
import MaxWidth from '../../../../components/macroComponents/MaxWidth';
import UserScreenWidthIsLargerThan from '../../../../functions/UserScreenWidthIsLargerThan';
import SeeMoreButton from '../../../../components/microComponents/SeeMoreButton';

const Projects: React.FC<{ data: ProjectsData }> = ({ data }) => {
  const [seeMoreMobileActive, setSeeMoreMobileActive] = React.useState(false);
  const UserScreenWidthIsLargerThan1200 = UserScreenWidthIsLargerThan(1200);
  const UserScreenWidthIsLargerThan768 = UserScreenWidthIsLargerThan(768);
  return (
    <section className={styles.projectsSection} id='projects'>
      <MaxWidth>
        <TitleWithStar> {data.title} </TitleWithStar>
        <div className={styles.projectsContent}>
          {data.projects.map((project, index) => {
            if (UserScreenWidthIsLargerThan1200) {
              return <ProjectsContent {...project} key={index} />;
            } else if (
              (UserScreenWidthIsLargerThan768 && index < 2) ||
              seeMoreMobileActive
            ) {
              return (
                <ProjectsContent
                  {...project}
                  seeMoreMobileActived={seeMoreMobileActive}
                  key={index}
                />
              );
            } else if (index < 1 || seeMoreMobileActive) {
              return (
                <ProjectsContent
                  {...project}
                  seeMoreMobileActived={seeMoreMobileActive}
                  key={index}
                />
              );
            }
            <ProjectsContent
              {...project}
              seeMoreMobileActived={seeMoreMobileActive}
              key={index}
            />;
          })}
        </div>
        {!UserScreenWidthIsLargerThan(1200) && (
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
