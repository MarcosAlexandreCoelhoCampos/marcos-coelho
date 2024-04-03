// React
import React from 'react';

//  Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  CSS GLOBAL
import './index.css';

// PAGES
const Home = React.lazy(() => import('./pages/Home'));
const Page404 = React.lazy(() => import('./pages/Page404'));
import Loading from './pages/Loading/index.tsx';

//  HEADER AND FOOTER
import Header from './components/macroComponents/Header';

//  JSON e TYPESCRIPT
import siteData from './textContent/typescript/home.ts';

/* 
Ajustar tab, está com foco no menu ao iniciar
Ajustar Aviões, para que eles não tenham MaxWidth no mobile
Ajustar Typagens (importar typagens que estão locais)
Separar componentes em componentes micro e os separar os macros que não serão reutilizados em suas devidas seções

EXISTEM ANOTAÇÕES NOS COMPONENTES:
CreateStarsOnContainer
Header
*/

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={siteData} />} />
          <Route path='/home' element={<Home data={siteData} />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
