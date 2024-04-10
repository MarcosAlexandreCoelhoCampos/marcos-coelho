// import React from "react";
import MaxWidth from '../MaxWidth';
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
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
          <img src='/icons/waves/waves.svg' alt='' width='352' height='64' />
        </div>
      </div>
      <footer className={styles.footer} id='footer'>
        <MaxWidth className={styles.footerMaxWidth}>
          <nav className={styles.footerContainer}>
            <ul className={styles.footerLinks}>
              <li>
                <a href='#about-me' className={'font-nav'}>
                  Sobre
                </a>
              </li>
              <li>
                <a href='#knowledges' className={'font-nav'}>
                  Conhecimento
                </a>
              </li>
              <li>
                <a href='#projects' className={'font-nav'}>
                  Projetos
                </a>
              </li>
              <li>
                <a href='#experience' className={'font-nav'}>
                  Formação
                </a>
              </li>
            </ul>
          </nav>
          <div className={`${styles.footerContainer}`}>
            <div className={styles.footerContent}>
              <p className={`font-logo ${styles.footerLogo}`}> MarcosCoelho</p>
              <p className={`${styles.footerTextDetail} font-nav`}>
                Programador e Designer
              </p>
              <nav>
                <ul className={styles.footerSocialMedias}>
                  <li>
                    <a target='_blank' href='mailto:marcooscampos@hotmail.com'>
                      <img src='/icons/social-medias/email.svg' alt='Email' />
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/marcos-alexandre-coelho-campos-pcd/'
                    >
                      <img
                        src='/icons/social-medias/linkedin.svg'
                        alt='Linkedin'
                      />
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://wa.me/5548984515046'>
                      <img
                        src='/icons/social-medias/whatsapp.svg'
                        alt='Whatsapp'
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </MaxWidth>
      </footer>
    </>
  );
};

export default Footer;
