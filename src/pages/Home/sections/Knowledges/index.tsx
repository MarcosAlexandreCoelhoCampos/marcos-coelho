import React from 'react';
import styles from './style.module.scss';
import CreateCloudsOnRow from '../../../../components/CreateCloudsOnRow/CreateCloudsOnRow';

const Knowledges = () => {
  const knowledgesSectionRef = React.useRef(null);

  return (
    <section className={styles.knowledgesSection} ref={knowledgesSectionRef}>
      <CreateCloudsOnRow />
      <div>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
        <p> TESTE </p>
      </div>
    </section>
  );
};

export default Knowledges;
