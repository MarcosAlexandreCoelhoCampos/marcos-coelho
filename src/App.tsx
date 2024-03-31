//  Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  CSS GLOBAL
import './index.css';

// PAGES
import Home from './pages/Home';
import Page404 from './pages/Page404';

//  HEADER AND FOOTER
import Header from './components/Header/Header.tsx';

//  JSON e TYPESCRIPT
import siteData from './textContent/typescript/home.ts';

/* 
EXISTEM ANOTAÇÕES NOS COMPONENTES:
CreateStarsOnContainer
Header
*/

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home data={siteData} />} />
        <Route path='/home' element={<Home data={siteData} />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
