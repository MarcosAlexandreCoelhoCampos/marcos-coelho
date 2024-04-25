import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/macroComponents/Header';

// PAGES
const Home = React.lazy(() => import('./pages/Home'));
const Page404 = React.lazy(() => import('./pages/Page404'));
import Loading from './components/macroComponents/Loading/index.tsx';

//  JSON e TYPESCRIPT
import siteData from './textContent/typescript/home.ts';
import page404Data from './textContent/typescript/page404.ts';

/* 
Ajustar Typagens e importações das informações de texto 
Separar os Macro Componentes em Micro  Componentes 

EXISTEM ANOTAÇÕES NOS COMPONENTES:
CreateStarsOnContainer
*/

const App = () => {
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
