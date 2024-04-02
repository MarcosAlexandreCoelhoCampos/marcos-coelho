import CreateCloudsOnRow from '../CreateCloudsOnRow';
import styles from './style.module.scss';

const CloudsDivider = () => {
  return (
    <div className={styles.CloudsDivider}>
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
