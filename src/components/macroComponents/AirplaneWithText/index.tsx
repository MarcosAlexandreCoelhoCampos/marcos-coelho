import React from 'react';
import styles from './AirplaneWithText.module.scss';
import macroComponentsData from '../../../textContent/typescript/macroComponents.ts';
import ComponentOnViewport from '../../../functions/ComponentOnViewport';

const AirplaneWithText: React.FC<{ texts: string[] }> = ({ texts }) => {
  const { AirplaneWithText } = macroComponentsData;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInViewport = ComponentOnViewport(containerRef);
  const [wasAnimated, setWasAnimated] = React.useState(false);

  React.useEffect(() => {
    setWasAnimated(false);
    const timer = setTimeout(() => setWasAnimated(isInViewport), 1500);
    return () => clearTimeout(timer);
  }, [isInViewport]);

  return (
    <div
      ref={containerRef}
      className={`${styles.AirplaneWithTextContainer} ${
        isInViewport && wasAnimated && styles.animationOverflow
      }`}
    >
      <div className={`${styles.AirplaneWithTextContent}`}>
        {texts.map((text, index) => (
          <div
            key={index}
            className={`${styles.AirplaneWithText}  ${
              isInViewport && 'animeFromNegativeLeft'
            } ${'animeFromNegativeLeftPreparation'}`}
          >
            <p>{text}</p>
            <img
              src={AirplaneWithText.image.src}
              alt={AirplaneWithText.image.alt}
              width={AirplaneWithText.image.width}
              height={AirplaneWithText.image.height}
              title={AirplaneWithText.image.title}
              aria-hidden='true'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirplaneWithText;
