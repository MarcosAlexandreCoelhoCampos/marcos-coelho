import React from 'react';
import styles from './style.module.scss';
import CreateCloudsOnRow from '../../../../components/CreateCloudsOnRow/CreateCloudsOnRow';

const Knowledges = () => {
  const teste1 = React.useRef(null);
  const teste2 = React.useRef(null);

  return (
    <section className={styles.knowledgesSection} ref={teste1}>
      <CreateCloudsOnRow />
      <div ref={teste2}>
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
