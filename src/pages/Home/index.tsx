import React from 'react';
import Banner from './sections/Banner';
import Head from '../../Head';
import AboutMe from './sections/AboutMe';
import { SiteData } from '../../textContent/typescript/home.ts';

const Home: React.FC<{ data: SiteData }> = ({ data }) => {
  document.body.style.backgroundColor = 'var(--color-primary-975)';

  return (
    <>
      <Head />
      <Banner data={data.Banner} />
      <AboutMe data={data.AboutMe} />
    </>
  );
};

export default Home;
