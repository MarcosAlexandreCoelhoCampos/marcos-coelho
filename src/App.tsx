// React
import React from 'react';

//  Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  CSS GLOBAL
import './index.css';

// PAGES
const Home = React.lazy(() => import('./pages/Home'));
const Page404 = React.lazy(() => import('./pages/Page404'));
import Loading from './components/macroComponents/Loading/index.tsx';

//  HEADER AND FOOTER
import Header from './components/macroComponents/Header';

//  JSON e TYPESCRIPT
import siteData from './textContent/typescript/home.ts';
import page404Data from './textContent/typescript/page404.ts';

/* 
Ajustar Typagens (importar typagens que estão locais)
Separar os Macro Componentes em Micro  Componentes 

Ajustar tab do header mobile

EXISTEM ANOTAÇÕES NOS COMPONENTES:
CreateStarsOnContainer
Header
Knowledges
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
