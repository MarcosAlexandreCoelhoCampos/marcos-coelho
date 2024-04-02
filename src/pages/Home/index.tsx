import React from 'react';
import { SiteData } from '../../textContent/typescript/home.ts';
import Head from '../../components/macroComponents/Head';
import CreateCloudsOnRow from '../../components/macroComponents/CreateCloudsOnRow';
import CloudsDivider from '../../components/macroComponents/CloudsDivider';
import Banner from './sections/Banner';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Knowledges from './sections/Knowledges';
import ExtraLargeClousDivider from '../../components/macroComponents/ExtraLargeClousDivider/index.tsx';

const Home: React.FC<{ data: SiteData }> = ({ data }) => {
  document.body.style.backgroundColor = 'var(--color-primary-975)';

  return (
    <>
      <Head />
      <Banner data={data.Banner} />
      <AboutMe data={data.AboutMe} />
      <CreateCloudsOnRow containerBg='var(--color-primary-800)' />
      <Knowledges data={data.Knowledges} />
      <CloudsDivider />
      <Projects data={data.Projects} />
      <ExtraLargeClousDivider />
    </>
  );
};

export default Home;
