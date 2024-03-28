import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import CreateStarsOnContainer from '../../../../components/CreateStarsOnContainer';

const Banner: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const homeBannerRef = React.useRef<HTMLDivElement>(null);
  const mainTitleRef = React.useRef<HTMLHeadingElement>(null);

  const svgs = [
    'star-average-no-tip-white.svg',
    'star-average-white.svg',
    'star-big-white.svg',
    'star-small-white.svg',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id={styles.homeBanner} ref={homeBannerRef}>
      <h1
        className={`${styles.mainTitle} font-bigtitle`}
        style={{ whiteSpace: 'pre-line' }}
        ref={mainTitleRef}
      >
        {`Desenvolvedor
          Front-End &
          UX/UI Design`}
      </h1>

      {loaded && (
        <div className={styles.containerStars}>
          {Array.from({ length: 25 }).map((_, index) => (
            <CreateStarsOnContainer
              key={index}
              svgs={svgs}
              index={index}
              imgHeight={30}
              imgWidth={30}
              containerRef={homeBannerRef}
              whiteSpaceRef={mainTitleRef}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Banner;
