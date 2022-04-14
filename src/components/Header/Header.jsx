import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

function Header() {
    return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className={styles.header__inner}>
              <div className={styles.header__logo}>
                  <img className={styles.header__img} src={logo} alt="logo" />
                  <h1>ReactApp</h1>
              </div>
  
              <nav className={styles.nav}>
                  <a className={styles.nav__link} href="#">Home</a>
                  <a className={styles.nav__link} href="#">About</a>
                  <a className={styles.nav__link} href="#">Gallary</a>
                  <a className={styles.nav__link} href="#">Features</a>
                  <a className={styles.nav__link} href="#">Contact</a>
              </nav>
  
              <button className={styles.burger}>
                  <span className={styles.burger__item}>Menu</span>
              </button>
  
          </div>
      </div>
  </header>
    );
  }
  
export default Header;