import React from 'react';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>MarcosCoelho</h2>
      <a href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'>
        CV
      </a>
      <button>
        <img src='/public/icons/open-menu.svg' alt='Abrir menu' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#sobre'> Sobre </a>
          </li>
          <li>
            <a href='#projetos'> Projetos </a>
          </li>
          <li>
            <a href='#experiencia'> Experiencia </a>
          </li>
          <li>
            <a href='#formacao'> Formação </a>
          </li>
          <li>
            <a href='#contato'> Contato</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1__BcaoPtUrONDdBu-mInk33NBYdWN_sq/view'>
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
