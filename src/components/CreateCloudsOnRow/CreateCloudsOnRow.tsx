import React from 'react';
import styles from './CreateCloudsOnRow.module.scss';
import UserScreenWidth from '../../functions/UserScreenWidth/UserScreenWidth';

const CreateCloudsOnRow = () => {
  const svgs = [
    '/icons/cloud/white/cloud-dark-blue-white.svg',
    '/icons/cloud/white/cloud-dark-white.svg',
    '/icons/cloud/white/cloud-light-blue-white.svg',
    '/icons/cloud/white/cloud-light-white.svg',
  ];

  const [cloudsRow1, setCloudsRow1] = React.useState<React.ReactNode>([]);
  const [cloudsRow2, setCloudsRow2] = React.useState<React.ReactNode>([]);
  const cloudsNum = !UserScreenWidth(768) ? 4 : 11;

  const createClouds = () => {
    const generatedClouds = [];
    for (let i = 0; i < cloudsNum; i++) {
      generatedClouds.push(
        <img
          key={`cloud-${i}-${cloudsNum}`}
          src={svgs[Math.floor(Math.random() * svgs.length)]}
          alt=''
          aria-hidden='true'
          style={{
            animation: `RollingTheClouds ${cloudsNum * 10}s linear infinite`,
          }}
        />
      );
    }
    return generatedClouds;
  };

  React.useEffect(() => {
    setCloudsRow1(createClouds());
    setCloudsRow2(createClouds());
  }, [cloudsNum]);

  return (
    <div className={styles.CreateCloudsOnRow}>
      <div className={styles.cloudsRow}>
        {cloudsRow1}
        {cloudsRow1}
      </div>
      <div className={styles.cloudsRow}>
        {cloudsRow2}
        {cloudsRow2}
      </div>
      <style>{`
        @keyframes RollingTheClouds {
          0% {
            transform: translateX(${-117 * (cloudsNum * 2)}px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CreateCloudsOnRow;
