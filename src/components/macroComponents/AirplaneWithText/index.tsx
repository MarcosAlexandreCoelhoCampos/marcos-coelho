import React from 'react';
import styles from './AirplaneWithText.module.scss';
import componentsData from '../../../textContent/typescript/macroComponents.ts';
import ComponentOnViewport from '../../../functions/ComponentOnViewport';
import UserScreenWidth from '../../../functions/UserScreenWidth';

const AirplaneWithText: React.FC<{ texts: string[] }> = ({ texts }) => {
  const { AirplaneWithText } = componentsData;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInViewport = ComponentOnViewport(containerRef);
  const isDesktop = UserScreenWidth(1200);

  return (
    <div
      ref={containerRef}
      className={`${styles.AirplaneWithTextContainer} ${
        isInViewport && !isDesktop ? styles.animate : ''
      }`}
    >
      <div className={`${styles.AirplaneWithTextContent}`}>
        {texts.map((text, index) => (
          <div key={index} className={styles.AirplaneWithText}>
            <p>{text}</p>
            <img
              src={AirplaneWithText.image.src}
              alt={AirplaneWithText.image.alt}
              width={AirplaneWithText.image.width}
              height={AirplaneWithText.image.height}
              title={AirplaneWithText.image.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirplaneWithText;
