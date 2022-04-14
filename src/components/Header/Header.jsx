import { useCallback, useState } from 'react';
import cn from 'classnames';
import cnBind from "classnames/bind";
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

function Header() {
    const cx = cnBind.bind(styles);
    const [burger, setBurger] = useState(false);
    const burgerMenu = cn(burger ? cx('navShow') : cx('nav'));


    const onClickBurger = useCallback(() => {
        setBurger((burger) => !burger);
      }, [burger]);


    return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className={styles.header__inner}>
              <div className={styles.header__logo}>
                  <img className={styles.header__img} src={logo} alt="logo" />
                  <h1>ReactApp</h1>
              </div>
  
              <nav className={burgerMenu}>
                  <a className={styles.nav__link} href="#">Home</a>
                  <a className={styles.nav__link} href="#">About</a>
                  <a className={styles.nav__link} href="#">Gallary</a>
                  <a className={styles.nav__link} href="#">Features</a>
                  <a className={styles.nav__link} href="#">Contact</a>
              </nav>
  
              <button className={styles.burger} onClick={onClickBurger}>
                  <span className={styles.burger__item}>Menu</span>
              </button>
  
          </div>
      </div>
  </header>
    );
  }
  
export default Header;