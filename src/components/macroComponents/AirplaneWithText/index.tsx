import React from 'react';
import styles from './AirplaneWithText.module.scss';
import componentsData from '../../../textContent/typescript/macroComponents.ts';
import ComponentOnViewport from '../../../functions/ComponentOnViewport';
import UserScreenWidthIsLargerThan from '../../../functions/UserScreenWidthIsLargerThan';

const AirplaneWithText: React.FC<{ texts: string[] }> = ({ texts }) => {
  const { AirplaneWithText } = componentsData;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInViewport = ComponentOnViewport(containerRef);
  const isDesktop = UserScreenWidthIsLargerThan(1200);

  // Veificar se é possivel fazer uma animação onde ele começa no scroll maximo do componente
  // e termina no inicio, assim mostrando que é um componente scrolavel e ao mesmo tempo
  // deixando bonito e interessante

  return (
    <div ref={containerRef} className={`${styles.AirplaneWithTextContainer}`}>
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
