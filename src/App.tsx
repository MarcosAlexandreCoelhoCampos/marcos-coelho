/* Rotas */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* CSS GLOBAL */
import './theme.scss';
import './fonts.scss';

/* PAGES */
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path="*" element={<Page404 />} /> ERROR PAGE*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
