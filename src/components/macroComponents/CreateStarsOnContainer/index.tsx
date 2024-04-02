import React from 'react';
import styles from './starAnimation.module.scss';
import componentsData from '../../../textContent/typescript/macroComponents';

/* 

Melhorar leitura do código
Separar código em componentes se possivel
Evitar que estrelas sejam criadas em cima de outras estrelas (talves a função que calcula WhiteSpace ajude)
numStarTotal tem que alterar ao mudar o tamanho do window

VERIFICAR FORMA DE SEMPRE QUE containerRef E whiteSpaceRef ATUALIZAREM
O CÓDIGO ATUALIZAR TAMBÉM
*/

interface CreateStarsOnContainerProps {
  svgs?: string[];
  numStars?: number;
  imgHeight?: number;
  imgWidth?: number;
  containerRef: React.RefObject<HTMLDivElement>;
  whiteSpaceRef?: React.RefObject<HTMLHeadingElement>;
  animationStar?: boolean;
}

const CreateStarsOnContainer: React.FC<CreateStarsOnContainerProps> = ({
  svgs = [''],
  numStars = 0,
  imgHeight = 30,
  imgWidth = 30,
  containerRef,
  whiteSpaceRef,
  animationStar = true,
}) => {
  const { starsSrc } = componentsData.CreateStarsOnContainer;
  const starsSvg = svgs[0] ? svgs : starsSrc;

  if (containerRef.current) containerRef.current.style.position = 'relative';

  const boundingClientRect = containerRef?.current?.getBoundingClientRect();
  const numStarTotal = numStars
    ? numStars
    : boundingClientRect
    ? Math.floor(boundingClientRect.width / 30 + boundingClientRect.height / 27)
    : 30;

  const [stars, setStars] = React.useState<JSX.Element[]>([]);

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
      return null;
    }

    return (
      <img
        src={`${starsSvg[Math.floor(Math.random() * starsSvg.length)]}`}
        aria-hidden='true'
        alt=''
        key={index}
        className={animationStar && styles.animationStar}
        style={{
          position: 'absolute',
          bottom: `${y}%`,
          left: `${x}%`,
          animationDelay: `${1 + Math.random() * 1}s`,
          animationDuration: `${4 + Math.random() * 6}s`,
        }}
      />
    );
  };

  const generateStars = () => {
    const newStars = [];
    let attempts = 0;

    while (newStars.length < numStarTotal && attempts < numStarTotal * 2) {
      const star = createStar(newStars.length);
      if (star) newStars.push(star);
      attempts++;
    }
    setStars(newStars);
  };

  React.useEffect(() => {
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
  }, [numStars, imgHeight, imgWidth, containerRef, whiteSpaceRef]);

  return <>{stars}</>;
};

export default CreateStarsOnContainer;
