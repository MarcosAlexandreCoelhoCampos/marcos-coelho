import React from 'react';
import { SiteData } from '../../textContent/typescript/home.ts';
import Head from '../../components/macroComponents/Head';
import CreateCloudsOnRow from '../../components/macroComponents/CreateCloudsOnRow';
import CloudsDivider from '../../components/macroComponents/CloudsDivider';
import Banner from './sections/Banner';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Knowledges from './sections/Knowledges';
import ExtraLargeClousDivider from '../../components/macroComponents/ExtraLargeClousDivider';
import ExperienceAndAcademic from './sections/ExperienceAndAcademic';

const Home: React.FC<{ data: SiteData }> = ({ data }) => {
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
      <ExperienceAndAcademic data={data.ExperienceAndAcademic} />
    </>
  );
};

export default Home;
