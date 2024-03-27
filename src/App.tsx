/* Rotas */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* CSS GLOBAL */
import './theme.scss';
import './fonts.scss';

/* PAGES */
import Home from './pages/Home';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
