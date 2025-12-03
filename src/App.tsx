import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/macroComponents/Header';
import userLang from './functions/userLang/index.ts';

const Home = React.lazy(() => import('./pages/Home'));
const Page404 = React.lazy(() => import('./pages/Page404'));
import Loading from './components/macroComponents/Loading/index.tsx';

import { siteDataEn, siteDataPt } from './textContent/typescript/home.ts';
import { enPage404, ptPage404 } from './textContent/typescript/page404.ts';

const App = () => {
  const siteData = userLang === 'pt-br' ? siteDataPt : siteDataEn;
  const page404Data = userLang === 'pt-br' ? ptPage404 : enPage404;

  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={siteData} />} />
          <Route path='/home' element={<Home data={siteData} />} />
          <Route
            path='*'
            element={<Page404 data={page404Data.Page404Content} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
