import React from 'react';
import styles from './style.module.scss';
import CreateStarsOnContainer from '../../../../components/CreateStarsOnContainer';

const Banner: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false);
  const homeBannerRef = React.useRef<HTMLDivElement>(null);
  const mainTitleRef = React.useRef<HTMLDivElement>(null);
  // const mainTitleRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`${styles.homeBanner}`} ref={homeBannerRef} id='banner'>
      <h1
        className={`${styles.mainTitle}`}
        style={{ whiteSpace: 'pre-line' }}
        ref={mainTitleRef}
      >
        {`Desenvolvedor
          Front-End &
          UX/UI Design`}
      </h1>

      {loaded && (
        <div>
          <CreateStarsOnContainer
            containerRef={homeBannerRef}
            whiteSpaceRef={mainTitleRef}
          />
        </div>
      )}
    </section>
  );
};

export default Banner;
