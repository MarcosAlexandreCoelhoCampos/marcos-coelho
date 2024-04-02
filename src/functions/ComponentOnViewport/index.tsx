import React from 'react';

const ComponentOnViewport = (
  ref: React.RefObject<HTMLElement>,
  where: number = 1.2
) => {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementRect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (
          elementRect.top < windowHeight / where &&
          elementRect.top > -windowHeight / where
        ) {
          setIsInView(true);
        } else if (elementRect.bottom < 0 || elementRect.top > windowHeight) {
          setIsInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isInView;
};

export default ComponentOnViewport;
