// import React from 'react';
import Banner from './sections/Banner';
import Head from '../../Head';

const Home = () => {
  document.body.style.backgroundColor = 'var(--color-primary-975)';

  return (
    <>
      <Head />
      <Banner />
    </>
  );
};

export default Home;
