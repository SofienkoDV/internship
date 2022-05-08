import { useCallback, useState } from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

function Header() {
    const [burger, setBurger] = useState(false);
    const burgerMenu = cn(burger ? styles.navShow : styles.nav);


    const onClickBurger = useCallback(() => {
        setBurger((burger) => !burger);
      }, []);

    return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className={styles.header__inner}>
              <div className={styles.header__logo}>
                  <img className={styles.header__img} src={logo} alt="logo" />
                  <h1>ReactApp</h1>
              </div>
  
              <nav className={burgerMenu}>
                  <Link className={styles.nav__link} to="Home">Home</Link>
                  <a className={styles.nav__link} href="https://wowjs.uk/">About</a>
                  <a className={styles.nav__link} href="https://wowjs.uk/">Gallary</a>
                  <a className={styles.nav__link} href="https://wowjs.uk/">Features</a>
                  <a className={styles.nav__link} href="https://wowjs.uk/">Contact</a>
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