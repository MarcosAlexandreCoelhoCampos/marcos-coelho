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
Ajustar tab, está com foco no menu ao iniciar
Ajustar Aviões, para que eles não tenham MaxWidth no mobile
Ajustar Typagens (importar typagens que estão locais)
Separar componentes em componentes micro e os separar os macros que não serão reutilizados em suas devidas seções

Verificar todos os componentes que usam UserScreenWidthIsLargerThan para  saber se eles estão
realmente agindo como deveriam

Target _blanck para abrir as páginas de estudo?

Criar alguma forma de passar a informação que o site foi criado para estudo e repensar a forma como os cards são criados
Acredito que manter 3 cards maximos no desktop e deixar o botão "veja mais" é o melhor dos casos

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
