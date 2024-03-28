import React from 'react';

interface CreateStarsOnContainerProps {
  svgs: string[];
  index: number;
  imgHeight: number;
  imgWidth: number;
  containerRef: React.RefObject<HTMLDivElement>;
  whiteSpaceRef?: React.RefObject<HTMLHeadingElement>;
}

const CreateStarsOnContainer: React.FC<CreateStarsOnContainerProps> = ({
  svgs,
  index,
  imgHeight,
  imgWidth,
  containerRef,
  whiteSpaceRef,
}) => {
  const getRandomPosition = () => {
    const boundingClientRect = containerRef.current?.getBoundingClientRect();
    const maxX = boundingClientRect ? boundingClientRect.width - imgWidth : 0;
    const maxY = boundingClientRect ? boundingClientRect.height - imgHeight : 0;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    return { x, y };
  };

  const checkIfPositionIsInsideWhiteSpace = (x: number, y: number) => {
    if (!whiteSpaceRef) return false;

    const mainTitleInfos = whiteSpaceRef.current?.getBoundingClientRect();

    if (mainTitleInfos) {
      const { top, left, width, height } = mainTitleInfos;
      const imgWidth = 30;
      const imgHeight = 30;

      return !(
        x + imgWidth < left ||
        x > left + width ||
        y + imgHeight < top ||
        y > top + height
      );
    }

    return false;
  };

  const createStar = (index: number): JSX.Element | null => {
    const { x, y } = getRandomPosition();

    const positionAlreadyExists = allStartPosition.some(
      (startPosition) =>
        (startPosition.top === y && startPosition.left === x) ||
        (startPosition.top - 25 < y &&
          y < startPosition.top + 25 &&
          startPosition.left - 25 < x &&
          x < startPosition.left + 25)
    );

    if (positionAlreadyExists || checkIfPositionIsInsideWhiteSpace(x, y)) {
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
          top: y,
          left: x,
        }}
      />
    );
  };

  let allStartPosition: { top: number; left: number }[] = [];

  return <>{createStar(index)}</>;
};

export default CreateStarsOnContainer;
