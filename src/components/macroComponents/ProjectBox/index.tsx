import React from 'react';
import styles from './ProjectContent.module.scss';
import { ProjectData } from '../../../textContent/typescript/home';
import AccessWebsite from '../../microComponents/AccessWebsite';
import ComponentOnViewport from '../../../functions/ComponentOnViewport';

const ProjectBox: React.FC<ProjectData> = ({
  subtitle,
  text,
  link,
  image,
  technologies,
  seeMoreMobileActived,
  createdForStudy,
}) => {
  const ProjectContentRef = React.useRef(null);

  return (
    <div
      ref={ProjectContentRef}
      className={`${styles.ProjectContent} ${
        (ComponentOnViewport(ProjectContentRef) || seeMoreMobileActived) &&
        'animeToBottom'
      } animeToBottomPrepartion`}
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
      <div className={`${styles.ProjectContentImage}`}>
        <img
          src={image.src}
          alt={image.alt}
          title={image.title}
          width={image.width}
          height={image.height}
        />
        {createdForStudy && (
          <p className={`font-littlebutton`}> Feito para estudo </p>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
