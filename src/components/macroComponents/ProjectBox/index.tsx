import React from 'react';
import styles from './ProjectContent.module.scss';
import { ProjectData } from '../../../textContent/typescript/home';
import AccessWebsite from '../../microComponents/AccessWebsite';
import ComponentOnViewport from '../../../functions/ComponentOnViewport';
import {
  ptMacroComponentsData,
  enMacroComponentsData,
} from '../../../textContent/typescript/macroComponents.ts';
import userLang from '../../../functions/userLang/index.ts';

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

  const macroComponentsData =
    userLang === 'pt-br' ? ptMacroComponentsData : enMacroComponentsData;

  const { ProjectBox } = macroComponentsData;

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
          <p>{ProjectBox.toolsUsed}</p>
          <h4 className='font-mediumbutton'>{technologies}</h4>
        </div>
        <AccessWebsite
          link={link}
          text={ProjectBox.accessSite}
          img={{
            src: '/icons/arrow/arrow-right-white.svg',
            title: ProjectBox.accessSiteTitle,
            width: 11,
            height: 18,
          }}
        />
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
          <p className={`font-littlebutton`}> {ProjectBox.madeForStudy} </p>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
