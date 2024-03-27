import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../../components/MaxWidth/MaxWidth';

/* 
Teste
import ImageOpenMenu from '/icons/open-menu.svg';
import ImageCloseMenu from 'public/icons/close-menu.svg';
*/

const Header: React.FC = () => {
  const [menuNavActive, setmenuNavActive] = React.useState(false);

  return (
    <header className={`${styles.header} ${menuNavActive && styles.active}`}>
      <MaxWidth className={styles.MaxWidthContainer}>
        <div className={styles.container}>
          <div className={styles.containerLogo}>
            <h2 className='font-logo'>MarcosCoelho</h2>
          </div>
          <div className={styles.containerNav}>
            <a
              className={`font-nav ${styles.curriculo}`}
              href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'
            >
              CV
            </a>

            <div className={`${styles.openCloseMenu}`}>
              <button
                className={styles.openMenu}
                onClick={() => setmenuNavActive(true)}
              >
                <img src='/icons/menu/open-menu.svg' alt='Abrir menu' />
              </button>
              <button
                className={styles.closeMenu}
                onClick={() => setmenuNavActive(false)}
              >
                <img src='/icons/menu/close-menu.svg' alt='Fechar menu' />
              </button>
            </div>

            <nav className={`${styles.menuNav}`}>
              <ul>
                <li>
                  <a className='font-nav' href='#sobre'>
                    Sobre
                  </a>
                </li>
                <li>
                  <a className='font-nav' href='#projetos'>
                    Projetos
                  </a>
                </li>
                <li>
                  <a className='font-nav' href='#experiencia'>
                    Experiencia
                  </a>
                </li>
                <li>
                  <a className='font-nav' href='#formacao'>
                    Formação
                  </a>
                </li>
                <li>
                  <a className='font-nav' href='#contato'>
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    className={`font-nav ${styles.curriculo}`}
                    href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'
                  >
                    CV
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
