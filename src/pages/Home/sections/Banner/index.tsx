import React from 'react';
import styles from './style.module.scss';
import CreateStarsOnContainer from '../../../../components/CreateStarsOnContainer/CreateStarsOnContainer.tsx';
import { BannerData } from '../../../../textContent/typescript/home.ts';

const Banner: React.FC<{ data: BannerData }> = ({ data }) => {
  const homeBannerRef = React.useRef<HTMLDivElement>(null);
  const mainTitleRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className={`${styles.homeBanner}`} ref={homeBannerRef} id='banner'>
      <h1
        className={`${styles.mainTitle}`}
        style={{ whiteSpace: 'pre-line' }}
        ref={mainTitleRef}
      >
        {`${data.mainTitle[0]}
        ${data.mainTitle[1]}
        ${data.mainTitle[2]}`}
      </h1>
      <div>
        <CreateStarsOnContainer
          containerRef={homeBannerRef}
          whiteSpaceRef={mainTitleRef}
        />
      </div>
    </section>
  );
};

export default Banner;
