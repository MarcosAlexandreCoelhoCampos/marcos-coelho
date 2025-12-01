import React from 'react';
import { SiteData } from '../../textContent/typescript/home.ts';
import Header from '../../components/macroComponents/Head';
import CreateCloudsOnRow from '../../components/macroComponents/CreateCloudsOnRow';
import CloudsDivider from '../../components/macroComponents/CloudsDivider';
import Banner from './sections/Banner';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Knowledges from './sections/Knowledges';
import ExtraLargeClousDivider from '../../components/macroComponents/ExtraLargeClousDivider';
import ExperienceAndAcademic from './sections/ExperienceAndAcademic';
import Footer from '../../components/macroComponents/Footer/index.tsx';

const Home: React.FC<{ data: SiteData }> = ({ data }) => {
  return (
    <>
      <Header />
      <Banner data={data.Banner} />
      <AboutMe data={data.AboutMe} />
      <CreateCloudsOnRow containerBg='var(--color-primary-750)' />
      <Knowledges data={data.Knowledges} />
      <CloudsDivider style={{ backgroundColor: 'var(--color-primary-750)' }} />
      <Projects data={data.Projects} />
      <ExtraLargeClousDivider
        style={{ backgroundColor: 'var(--color-primary-650)' }}
      />
      <ExperienceAndAcademic data={data.ExperienceAndAcademic} />
      <Footer />
    </>
  );
};

export default Home;
