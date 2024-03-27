import React from 'react';
import styles from './style.module.scss';

const Banner = () => {
  const homeBannerRef = React.useRef(null);
  const mainTitleRef = React.useRef(null);

  const getRandomPosition = () => {
    const imgWidth = 30;
    const imgHeight = 30;

    const maxX =
      homeBannerRef?.current?.getBoundingClientRect().width - imgWidth;
    const maxY =
      homeBannerRef?.current?.getBoundingClientRect().height - imgHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    return { x, y };
  };

  const svgs = [
    'star-average-no-tip-white.svg',
    'star-average-white.svg',
    'star-big-white.svg',
    'star-small-white.svg',
  ];

  let allStartPosition = [];

  const createStar = (index: number) => {
    const { x, y } = getRandomPosition();

    const mainTitleInfos = mainTitleRef?.current?.getBoundingClientRect();

    const positionAlreadyExists = allStartPosition.some(
      (startPosition) =>
        (startPosition.top === y && startPosition.left === x) ||
        (startPosition.top - 25 < y &&
          y < startPosition.top + 25 &&
          startPosition.left - 25 < x &&
          x < startPosition.left + 25)
    );

    if (mainTitleInfos) {
      const { top, left, width, height } = mainTitleInfos;

      // Adicione a largura e a altura da imagem à sua verificação
      const imgWidth = 30; // Substitua pelo valor real
      const imgHeight = 30; // Substitua pelo valor real

      if (
        !(
          x + imgWidth < left ||
          x > left + width ||
          y + imgHeight < top ||
          y > top + height
        )
      ) {
        return createStar(index);
      }
    }

    if (positionAlreadyExists) {
      return createStar(index);
    }

    allStartPosition.push({
      top: y,
      left: x,
    });

    return (
      <img
        src={`./icons/stars/white/${svgs[Math.floor(Math.random() * 4)]}`}
        alt='Estrela'
        key={index}
        style={{
          position: 'absolute',
          top: y ? y : 20,
          left: x ? x : 20,
        }}
      />
    );
  };

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

      {Array.from({ length: 25 }).map((_, index) => createStar(index))}
    </section>
  );
};

export default Banner;
