import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../MaxWidth';
import UserScreenWidthIsLargerThan from '../../../functions/UserScreenWidthIsLargerThan';

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
  if (UserScreenWidthIsLargerThan(768)) document.body.style.paddingTop = '5rem';
  else document.body.style.paddingTop = '2rem';

  const [menuNavActive, setmenuNavActive] = React.useState(false);
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  const openMenuButton = React.useRef<HTMLButtonElement>(null);
  const closeMenuButton = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (menuNavActive) closeMenuButton.current?.focus();
    else openMenuButton.current?.focus();
  }, [menuNavActive]);

  return (
    <header className={`${styles.header} ${menuNavActive && styles.active}`}>
      <MaxWidth>
        <div className={styles.container}>
          <div className={styles.containerLogo}>
            <a className='font-logo' href='/'>
              MarcosCoelho
            </a>
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
                  ref={openMenuButton}
                  onClick={() => setmenuNavActive(true)}
                >
                  <img src='/icons/menu/open-menu.svg' alt='Abrir menu' />
                </button>
              )}

              {menuNavActive && (
                <button
                  className={styles.closeMenu}
                  ref={closeMenuButton}
                  onClick={() => setmenuNavActive(false)}
                >
                  <img src='/icons/menu/close-menu.svg' alt='Fechar menu' />
                </button>
              )}
            </div>

            {(UserScreenWidthIsLargerThan() || menuNavActive) && (
              <nav className={`${styles.menuNav}`}>
                <ul>
                  <li>
                    <a
                      onClick={() => setmenuNavActive(false)}
                      className='font-nav'
                      href='/#about-me'
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setmenuNavActive(false)}
                      className='font-nav'
                      href='/#knowledges'
                    >
                      Conhecimentos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setmenuNavActive(false)}
                      className='font-nav'
                      href='/#projects'
                    >
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setmenuNavActive(false)}
                      className='font-nav'
                      href='/#experience'
                    >
                      Experiencia
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setmenuNavActive(false)}
                      className='font-nav'
                      href='/#experience'
                    >
                      Formação
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setmenuNavActive(false)}
                      className='font-nav'
                      href='/#footer'
                    >
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
