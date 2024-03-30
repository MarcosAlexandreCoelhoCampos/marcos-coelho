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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
