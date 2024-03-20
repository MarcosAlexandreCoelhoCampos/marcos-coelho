import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../../components/MaxWidth/MaxWidth';

const Header: React.FC = () => {
  const [menuNavActive, setmenuNavActive] = React.useState(false);

  return (
    <header className={`${styles.header} ${menuNavActive && styles.active}`}>
      <MaxWidth>
        <div className={styles.container}>
          <div className={styles.containerMenu}>
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
                  <img src='/public/icons/open-menu.svg' alt='Abrir menu' />
                </button>
                <button
                  className={styles.closeMenu}
                  onClick={() => setmenuNavActive(false)}
                >
                  <img src='/public/icons/close-menu.svg' alt='Fechar menu' />
                </button>
              </div>
            </div>
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
                  className='font-nav'
                  href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
