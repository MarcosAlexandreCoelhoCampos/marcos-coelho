import React from 'react';
import styles from './ProjectsContent.module.scss';
import { ProjectData } from '../../../../../textContent/typescript/home';

const ProjectsContent: React.FC<ProjectData> = ({
  subtitle,
  text,
  link,
  image,
  technologies,
}) => {
  return (
    <div className={styles.ProjectsContent}>
      <div className={styles.ProjectsContentText}>
        <h3 className='font-contrast'>{subtitle}</h3>
        <h4> </h4>
        <p>{text}</p>
        <div>
          <p>Ferramentas e Técnologias usadas:</p>
          <h4 className='font-mediumbutton'>{technologies}</h4>
        </div>
        <a className='font-mediumbutton' href='#'>
          {link}
          <img
            src={image.src}
            alt={image.alt}
            title={image.title}
            width={image.width}
            height={image.height}
          />
        </a>
      </div>
      <div className={styles.ProjectsContentImage}>
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

export default ProjectsContent;
