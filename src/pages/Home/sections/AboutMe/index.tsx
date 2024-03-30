import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../../../../components/MaxWidth/MaxWidth';
import TitleWithStar from '../../../../components/TitleWithImage/TitleWithStar';
import CreateStarsOnContainer from '../../../../components/CreateStarsOnContainer';

const AboutMe = () => {
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const aboutMeContainertRef = React.useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => setLoaded(true), [aboutMeRef, aboutMeContainertRef]);

  const stars = [
    'star-average-no-tip-white.svg',
    'star-average-white.svg',
    'star-small-white.svg',
  ];

  return (
    <section className={styles.aboutMeSection} id='about-me' ref={aboutMeRef}>
      {loaded && (
        <div>
          <CreateStarsOnContainer
            containerRef={aboutMeRef}
            whiteSpaceRef={aboutMeContainertRef}
            numStars={25}
            svgs={stars}
          />
        </div>
      )}

      <MaxWidth>
        <div
          className={styles.aboutMeSectionContainer}
          ref={aboutMeContainertRef}
        >
          <img
            src='/home/about-me.png'
            alt=''
            className={styles.aboutMeImage}
          />
          <div className={styles.textContent}>
            <TitleWithStar> Sobre Mim </TitleWithStar>
            <p>
              Sou um desenvolvedor front-end com uma paixão pela criação de
              designs envolventes e funcionais. Descobri minha vocação para a
              programação aos 14 anos e desde então tenho me dedicado a
              aprimorar minhas habilidades nessa área em constante evolução.
              Atualmente, aos 20 anos, estou em formação acadêmica, cursando o
              segundo semestre de Análise e Desenvolvimento de Sistemas na
              Cruzeiro do Sul.
            </p>
            <p>
              Além disso, como pessoa autista de suporte no grau 1, trago uma
              perspectiva única e uma abordagem meticulosa aos meus projetos,
              buscando sempre a excelência e a usabilidade em cada solução que
              desenvolvo.
            </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default AboutMe;
