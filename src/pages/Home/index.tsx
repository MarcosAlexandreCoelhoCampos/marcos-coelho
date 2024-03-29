// import React from 'react';
import Banner from './sections/Banner';
import Head from '../../Head';
import AboutMe from './sections/AboutMe';

const Home = () => {
  document.body.style.backgroundColor = 'var(--color-primary-975)';

  return (
    <>
      <Head />
      <Banner />
      <AboutMe />
    </>
  );
};

export default Home;
