import React from 'react';
import styles from './style.module.scss';
import MaxWidth from '../MaxWidth';
import UserScreenWidthIsLargerThan from '../../../functions/UserScreenWidthIsLargerThan';
import PreventFocusEscapeModal from '../../../functions/PreventFocusEscapeModal';

const Header: React.FC = () => {
  if (UserScreenWidthIsLargerThan(768)) document.body.style.paddingTop = '5rem';
  else document.body.style.paddingTop = '2rem';

  const [menuNavActive, setmenuNavActive] = React.useState(false);
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  const openMenuButtonRef = React.useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = React.useRef<HTMLButtonElement>(null);
  const firstElementHeaderModalRef = React.useRef<HTMLAnchorElement>(null);
  const lastElementHeaderModalRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
    else if (menuNavActive) {
      closeMenuButtonRef.current?.focus();
      document.body.style.overflowY = 'hidden';
    } else {
      openMenuButtonRef.current?.focus();
      document.body.style.overflowY = 'initial';
    }
  }, [menuNavActive]);

  return (
    <header className={`${styles.header} ${menuNavActive && styles.active}`}>
      <MaxWidth>
        <div className={styles.container}>
          <div className={styles.containerLogo}>
            <a
              className='font-logo'
              href='/'
              ref={firstElementHeaderModalRef}
              onKeyDown={(event) =>
                PreventFocusEscapeModal(
                  event,
                  firstElementHeaderModalRef,
                  lastElementHeaderModalRef
                )
              }
            >
              MarcosCoelho
            </a>
          </div>
          <div className={styles.containerNav}>
            <a
              className={`font-nav ${styles.curriculum}`}
              href='https://drive.google.com/file/d/1cP6cDju38YjbBlavWRyaRjR9bZioMm2R/view?usp=sharing'
              target='_blank'
            >
              CV
            </a>

            <div className={`${styles.openCloseMenu}`}>
              {!menuNavActive && (
                <button
                  className={styles.openMenu}
                  ref={openMenuButtonRef}
                  onClick={() => setmenuNavActive(true)}
                >
                  <img
                    src='/icons/menu/open-menu.svg'
                    width={25}
                    height={18}
                    alt='Abrir menu'
                    title='Abrir o menu'
                  />
                </button>
              )}

              {menuNavActive && (
                <button
                  className={styles.closeMenu}
                  ref={closeMenuButtonRef}
                  onClick={() => setmenuNavActive(false)}
                >
                  <img
                    src='/icons/menu/close-menu.svg'
                    width={20}
                    height={20}
                    alt='Fechar menu'
                    title='Fechar o menu'
                  />
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
                      href='https://drive.google.com/file/d/1cP6cDju38YjbBlavWRyaRjR9bZioMm2R/view?usp=sharing'
                      ref={lastElementHeaderModalRef}
                      onKeyDownCapture={(event) =>
                        PreventFocusEscapeModal(
                          event,
                          firstElementHeaderModalRef,
                          lastElementHeaderModalRef
                        )
                      }
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
