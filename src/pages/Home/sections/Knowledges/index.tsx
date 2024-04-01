import styles from './style.module.scss';
import TitleWithStar from '../../../../components/TitleWithStar/TitleWithStar';
import { KnowledgesData } from '../../../../textContent/typescript/home.ts';
import AirplaneWithText from '../../../../components/AirplaneWithText/AirplaneWithText.tsx';
import MaxWidth from '../../../../components/MaxWidth/MaxWidth.tsx';

const Knowledges: React.FC<{ data: KnowledgesData }> = ({ data }) => {
  return (
    <section className={styles.knowledgesSection}>
      <MaxWidth>
        <TitleWithStar> {data.title} </TitleWithStar>
      </MaxWidth>
      <MaxWidth className={styles.airplanesMaxWidth}>
        <AirplaneWithText texts={data.knowledges} />
      </MaxWidth>
    </section>
  );
};

export default Knowledges;
