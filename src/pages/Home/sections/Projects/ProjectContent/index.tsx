import React from 'react';
import styles from './ProjectContent.module.scss';
import { ProjectData } from '../../../../../textContent/typescript/home';
import AccessWebsite from '../../../../../components/microComponents/AccessWebsite';
import ComponentOnViewport from '../../../../../functions/ComponentOnViewport';

const ProjectContent: React.FC<ProjectData> = ({
  subtitle,
  text,
  link,
  image,
  technologies,
  seeMoreMobileActived,
}) => {
  const ProjectContent = React.useRef(null);

  return (
    <div
      ref={ProjectContent}
      className={`${styles.ProjectContent} ${
        (ComponentOnViewport(ProjectContent) || seeMoreMobileActived) &&
        'animeToBottom'
      }`}
    >
      <div className={styles.ProjectContentText}>
        <h3 className='font-contrast'>{subtitle}</h3>
        <p>{text}</p>
        <div>
          <p>Ferramentas e Técnologias usadas:</p>
          <h4 className='font-mediumbutton'>{technologies}</h4>
        </div>
        <AccessWebsite link={link} />
      </div>
      <div className={styles.ProjectContentImage}>
        <img
          src={image.src}
          alt={image.alt}
          title={image.title}
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  );
};

export default ProjectContent;
