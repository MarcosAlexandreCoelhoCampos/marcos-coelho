import React from 'react';
import styles from './CreateCloudsOnRow.module.scss';

const CreateCloudsOnRow = () => {
  const svgs = [
    '/icons/cloud/white/cloud-dark-blue-white.svg',
    '/icons/cloud/white/cloud-dark-white.svg',
    '/icons/cloud/white/cloud-light-blue-white.svg',
    '/icons/cloud/white/cloud-light-white.svg',
  ];

  const [cloudsRow1, setCloudsRow1] = React.useState<React.ReactNode>([]);
  const [cloudsRow2, setCloudsRow2] = React.useState<React.ReactNode>([]);

  const createClouds = () => {
    const generatedClouds = [];
    for (let i = 0; i < 11; i++) {
      generatedClouds.push(
        <img
          key={i}
          src={svgs[Math.floor(Math.random() * svgs.length)]}
          alt=''
          aria-hidden='true'
        />
      );
    }
    return generatedClouds;
  };

  React.useEffect(() => {
    setCloudsRow1(createClouds());
    setCloudsRow2(createClouds());
  }, []);

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
    </div>
  );
};

export default CreateCloudsOnRow;
