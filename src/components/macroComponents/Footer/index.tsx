// import React from "react";
import styles from './style.module.scss';

const Footer = ({ backgroundWaves = '#0E2D7B' }) => {
  return (
    <>
      <div
        className={styles.wavesContainer}
        style={{ backgroundColor: backgroundWaves }}
      >
        <div className={styles.waves}>
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
        </div>
      </div>
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <a href='#'> Sobre </a>
            </li>
            <li>
              <a href='#'> Conhecimento </a>
            </li>
            <li>
              <a href='#'> Projetos </a>
            </li>
            <li>
              <a href='#'> Formação </a>
            </li>
          </ul>
        </nav>
        <div className={''}>
          <p className='font-logo'> MarcosCoelho</p>
          <p> Programador e Designer </p>
          <nav>
            <ul>
              <li>
                <a href='#'>
                  <img src='#' alt='Email' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='#' alt='Linkedin' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='#' alt='Whatsapp' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
