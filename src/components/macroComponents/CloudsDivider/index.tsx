import CreateCloudsOnRow from '../CreateCloudsOnRow';
import styles from './style.module.scss';

const CloudsDivider: React.FC<{ style?: React.CSSProperties }> = ({
  style,
}) => {
  return (
    <div className={styles.CloudsDivider} style={style}>
      <div className={styles.cloudContainer}>
        <CreateCloudsOnRow animationTimeDuration={2} />
      </div>

      <div className={styles.cloudContainer}>
        <CreateCloudsOnRow animationTimeDuration={2} />
      </div>

      <div className={styles.cloudContainer}>
        <CreateCloudsOnRow animationTimeDuration={2} />
      </div>

      <div className={styles.cloudContainer}>
        <CreateCloudsOnRow animationTimeDuration={2} />
      </div>
    </div>
  );
};

export default CloudsDivider;
