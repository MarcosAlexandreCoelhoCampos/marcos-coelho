/* Rotas */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* CSS GLOBAL */
import './theme.scss';
import './fonts.scss';
import './global.scss';

/* PAGES */
import Home from './pages/Home';
import Page404 from './pages/Page404';

/* HEADER AND FOOTER */
import Header from './components/Header';

/* JSON e TYPESCRIPT */
import siteData from './textContent/typescript/home.ts';

/* 

ANTES DE CONTINUAR  CRIAR JSON E TS COM O CONTEUDO DO SITE

ANALISAR COMPONENTES CRIADOS ATÉ ENTÃO PARA CORRIGIR 
O NOME DAS CLASSES (CASO TENHAM CLASSES EM PT-BR)

ANALISAR COMPONENTES CRIADOS ATÉ ENTÃO PARA POSSIVEL
MELHORA NA LÓGICA E RENDEDIZAÇÃO

ANALISAR CÓDIGO PARA VERIFICAR ACESSIBILIDADE

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
