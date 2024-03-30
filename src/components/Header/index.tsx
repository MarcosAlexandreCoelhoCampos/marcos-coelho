import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../../components/MaxWidth/MaxWidth';
import UserScreenWidth from '../UserScreenWidth/UserScreenWidth';

/* 

Criar animação para navegação

*/

/* 
Teste
import ImageOpenMenu from '/icons/open-menu.svg';
import ImageCloseMenu from 'public/icons/close-menu.svg';
*/

/* 
Seguindo esse caminho podemos navegar por paginas de uma forma mais fluida

import { Link } from 'react-router-dom'

<Link to="/"> Home </Link>
<Link to="sobre"> Sobre </Link

Para ter mais funções dentro do link
Neste caso, o react adiciona automaticamente a class active no que está ativo com base na rota
Alem de outras funções e detalhes

import { NavLink } from 'react-router-dom'

Home precisa ter "end" no final, pois o link é apenas uma / e todos os links
tem essa barra por padrão no inicio
<NavLink to="/" end > Home </NavLink>
<NavLink to="sobre"> Sobre </NavLink
*/

const Header: React.FC = () => {
  const [menuNavActive, setmenuNavActive] = React.useState(false);

  return (
    <header className={`${styles.header} ${menuNavActive && styles.active}`}>
      <MaxWidth>
        <div className={styles.container}>
          <div className={styles.containerLogo}>
            <h2 className='font-logo'>MarcosCoelho</h2>
          </div>
          <div className={styles.containerNav}>
            <a
              className={`font-nav ${styles.curriculum}`}
              href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'
              target='_blank'
            >
              CV
            </a>

            <div className={`${styles.openCloseMenu}`}>
              {!menuNavActive && (
                <button
                  className={styles.openMenu}
                  onClick={() => setmenuNavActive(true)}
                >
                  <img src='/icons/menu/open-menu.svg' alt='Abrir menu' />
                </button>
              )}

              {menuNavActive && (
                <button
                  className={styles.closeMenu}
                  onClick={() => setmenuNavActive(false)}
                  {...(menuNavActive ? { hidden: false } : { hidden: true })}
                >
                  <img src='/icons/menu/close-menu.svg' alt='Fechar menu' />
                </button>
              )}
            </div>

            {(UserScreenWidth() || menuNavActive) && (
              <nav className={`${styles.menuNav}`}>
                <ul>
                  <li>
                    <a className='font-nav' href='#about-me'>
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a className='font-nav' href='#projects'>
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a className='font-nav' href='#experience'>
                      Experiencia
                    </a>
                  </li>
                  <li>
                    <a className='font-nav' href='#academic-education'>
                      Formação
                    </a>
                  </li>
                  <li>
                    <a className='font-nav' href='#contatc-ne'>
                      Contato
                    </a>
                  </li>
                  <li>
                    <a
                      className={`font-nav ${styles.curriculum}`}
                      target='_blank'
                      href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'
                    >
                      CV
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
