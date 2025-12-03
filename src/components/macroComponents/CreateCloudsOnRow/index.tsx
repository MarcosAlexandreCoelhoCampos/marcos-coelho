import React from 'react';
import styles from './CreateCloudsOnRow.module.scss';
import UserScreenWidthIsLargerThan from '../../../functions/UserScreenWidthIsLargerThan';
import {
  enMacroComponentsData,
  ptMacroComponentsData,
} from '../../../textContent/typescript/macroComponents';
import userLang from '../../../functions/userLang';

interface Props {
  containerBg?: string;
  animationTimeDuration?: number;
}

const CreateCloudsOnRow: React.FC<Props> = ({
  containerBg = 'null',
  animationTimeDuration = 1,
}) => {
  const macroComponentsData =
    userLang === 'pt-br' ? ptMacroComponentsData : enMacroComponentsData;

  const { cloudsSrc } = macroComponentsData.CreateCloudsOnRow;
  const [cloudsRow1, setCloudsRow1] = React.useState<React.ReactNode>([]);
  const [cloudsRow2, setCloudsRow2] = React.useState<React.ReactNode>([]);
  const cloudsNum = !UserScreenWidthIsLargerThan(768) ? 4 : 11;

  const createClouds = () => {
    const generatedClouds = [];
    for (let i = 0; i < cloudsNum; i++) {
      generatedClouds.push(
        <img
          key={`cloud-${i}-${cloudsNum}`}
          src={cloudsSrc[Math.floor(Math.random() * cloudsSrc.length)]}
          alt=''
          width={118}
          height={61}
          aria-hidden='true'
          style={{
            animation: `RollingTheClouds ${
              cloudsNum * animationTimeDuration * 12
            }s linear infinite`,
          }}
        />,
      );
    }
    return generatedClouds;
  };

  React.useEffect(() => {
    setCloudsRow1(createClouds());
    setCloudsRow2(createClouds());
  }, [cloudsNum]);

  return (
    <div
      className={styles.CreateCloudsOnRow}
      style={{ backgroundColor: containerBg }}
    >
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
            transform: translateX(${-118 * (cloudsNum * 2)}px);
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
