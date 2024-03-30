import React from 'react';

const UserScreenWidth = (minWidth: number = 1200): boolean => {
  const [isWideScreen, setIsWideScreen] = React.useState<boolean>(
    window.innerWidth > minWidth
  );

  React.useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > minWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [minWidth]);

  return isWideScreen;
};

export default UserScreenWidth;
