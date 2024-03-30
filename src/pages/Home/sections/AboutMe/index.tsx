import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../../../../components/MaxWidth/MaxWidth';
import TitleWithStar from '../../../../components/TitleWithImage/TitleWithStar';
import CreateStarsOnContainer from '../../../../components/CreateStarsOnContainer';
import { AboutMeData } from '../../../../textContent/typescript/home.ts';

const AboutMe: React.FC<{ data: AboutMeData }> = ({ data }) => {
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const aboutMeContainertRef = React.useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => setLoaded(true), [aboutMeRef, aboutMeContainertRef]);

  return (
    <section className={styles.aboutMeSection} id='about-me' ref={aboutMeRef}>
      {loaded && (
        <div>
          <CreateStarsOnContainer
            containerRef={aboutMeRef}
            whiteSpaceRef={aboutMeContainertRef}
            numStars={25}
            svgs={data.stars}
          />
        </div>
      )}

      <MaxWidth>
        <div
          className={styles.aboutMeSectionContainer}
          ref={aboutMeContainertRef}
        >
          <img
            src={data.image.src}
            alt={data.image.alt}
            title={data.image.title}
            className={styles.aboutMeImage}
          />
          <div className={styles.textContent}>
            <TitleWithStar> {data.title} </TitleWithStar>
            {data.texts.map((text, index) => (
              <p key={index}> {text} </p>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutMe;
