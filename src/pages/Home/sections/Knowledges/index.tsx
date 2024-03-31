import styles from './style.module.scss';
import TitleWithStar from '../../../../components/TitleWithStar/TitleWithStar';
import { KnowledgesData } from '../../../../textContent/typescript/home.ts';

const Knowledges: React.FC<{ data: KnowledgesData }> = ({ data }) => {
  return (
    <section className={styles.knowledgesSection}>
      <div>
        <TitleWithStar> {data.title} </TitleWithStar>
      </div>
    </section>
  );
};

export default Knowledges;
