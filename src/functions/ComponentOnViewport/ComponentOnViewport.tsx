import React from 'react';

const ComponentOnViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementRect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (
          elementRect.top < windowHeight / 1.2 &&
          elementRect.top > -windowHeight / 1.2
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
