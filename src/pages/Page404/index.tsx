import styles from './style.module.scss';
import { Page404ContentData } from '../../textContent/typescript/page404.ts';

const Page404: React.FC<{ data: Page404ContentData }> = ({ data }) => {
  return <p className={`font-bigtitle ${styles.Page404}`}>{data.title}</p>;
};

export default Page404;
