import React, { useState, useEffect } from 'react';

interface CreateStarsOnContainerProps {
  svgs: string[];
  numStars: number; // Nova propriedade para especificar a quantidade de estrelas
  imgHeight: number;
  imgWidth: number;
  containerRef: React.RefObject<HTMLDivElement>;
  whiteSpaceRef?: React.RefObject<HTMLHeadingElement>;
}

const CreateStarsOnContainer: React.FC<CreateStarsOnContainerProps> = ({
  svgs,
  numStars, // Nova propriedade sendo utilizada
  imgHeight,
  imgWidth,
  containerRef,
  whiteSpaceRef,
}) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  const getRandomPosition = () => {
    if (!containerRef.current) {
      return { x: 0, y: 0 };
    }

    const boundingClientRect = containerRef.current.getBoundingClientRect();
    const maxX = boundingClientRect.width - imgWidth;
    const maxY = boundingClientRect.height - imgHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    const xPercentage = (x / boundingClientRect.width) * 100;
    const yPercentage = (y / boundingClientRect.height) * 100;

    return { x: xPercentage, y: yPercentage };
  };

  const checkIfPositionIsInsideWhiteSpace = (
    xPercentage: number,
    yPercentage: number
  ) => {
    if (!containerRef.current || !whiteSpaceRef?.current) {
      return false;
    }

    const mainTitleInfos = whiteSpaceRef.current.getBoundingClientRect();
    const containerInfos = containerRef.current.getBoundingClientRect();

    const imgWidthPercentage = (imgWidth / containerInfos.width) * 100;
    const imgHeightPercentage = (imgHeight / containerInfos.height) * 100;

    const adjustedTop =
      ((mainTitleInfos.top - containerInfos.top) / containerInfos.height) * 100;
    const adjustedLeft =
      ((mainTitleInfos.left - containerInfos.left) / containerInfos.width) *
      100;

    return !(
      xPercentage + imgWidthPercentage < adjustedLeft ||
      xPercentage >
        adjustedLeft + (mainTitleInfos.width / containerInfos.width) * 100 ||
      yPercentage + imgHeightPercentage < adjustedTop ||
      yPercentage >
        adjustedTop + (mainTitleInfos.height / containerInfos.height) * 100
    );
  };

  const createStar = (index: number): JSX.Element | null => {
    const { x, y } = getRandomPosition();

    if (checkIfPositionIsInsideWhiteSpace(x, y)) {
      return null; // Não cria uma nova estrela se a posição estiver dentro do espaço em branco
    }

    return (
      <img
        src={`./icons/stars/white/${svgs[Math.floor(Math.random() * 4)]}`}
        alt='Estrela'
        key={index}
        style={{
          position: 'absolute',
          bottom: `${y}%`,
          left: `${x}%`,
        }}
      />
    );
  };

  const generateStars = () => {
    const newStars = [];
    let attempts = 0;
    while (newStars.length < numStars && attempts < numStars * 2) {
      // Tenta até duas vezes o número desejado de estrelas
      const star = createStar(newStars.length);
      if (star) newStars.push(star);
      attempts++;
    }
    setStars(newStars);
  };

  useEffect(() => {
    generateStars();

    const debounce = (func: (...args: any[]) => void, wait: number) => {
      let timeout: number | null = null;
      return function executedFunction(...args: any[]) {
        const later = () => {
          if (timeout) clearTimeout(timeout);
          func(...args);
        };
        if (timeout) clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
      };
    };

    const handleResize = debounce(() => {
      generateStars();
    }, 500);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [numStars, svgs, imgHeight, imgWidth, containerRef, whiteSpaceRef]);

  return <>{stars}</>;
};

export default CreateStarsOnContainer;
