import styles from './style.module.scss';
import TitleWithStar from '../../../../components/microComponents/TitleWithStar/index.tsx';
import { KnowledgesData } from '../../../../textContent/typescript/home.ts';
import AirplaneWithText from '../../../../components/macroComponents/AirplaneWithText';
import MaxWidth from '../../../../components/macroComponents/MaxWidth';

const Knowledges: React.FC<{ data: KnowledgesData }> = ({ data }) => {
  return (
    <section className={styles.knowledgesSection} id='knowledges'>
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
