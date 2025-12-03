import styles from './style.module.scss';
import userLang from '../../../functions/userLang';
import { ptLoading, enLoading } from '../../../textContent/typescript/loading';

const Loading = () => {
  const loadingData = userLang === 'pt-br' ? ptLoading : enLoading;
  const { LoadingContent } = loadingData;

  return (
    <p className={`${styles.Loading} font-bigtitle`}>{LoadingContent.title}</p>
  );
};

export default Loading;
