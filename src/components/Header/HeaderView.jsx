import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function HeaderView({
  burger, onClickBurger, logo, changeLanguage
}) {
  const burgerMenu = cn(burger ? styles.navShow : styles.nav);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <img className={styles.header__img} src={logo} alt="logo" />
            <h1>ReactApp</h1>
          </div>

          <nav className={burgerMenu}>
            <Link className={styles.nav__link} to="home">
              Home
            </Link>
            <Link className={styles.nav__link} to="card">
              Card
            </Link>
            <a className={styles.nav__link} href="https://wowjs.uk/">
              Gallery
            </a>
            <a className={styles.nav__link} href="https://wowjs.uk/">
              Features
            </a>
            <Link className={styles.nav__link} to="biography">
              Biography
            </Link>
            <button className={styles.nav__button} type="button" onClick={() => changeLanguage('en')}>EN</button>
            <button className={styles.nav__button} type="button" onClick={() => changeLanguage('ua')}>UA</button>
          </nav>

          <button
            type="button"
            className={styles.burger}
            onClick={onClickBurger}
          >
            <span className={styles.burger__item}>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

HeaderView.propTypes = {
  burger: PropTypes.bool.isRequired,
  onClickBurger: PropTypes.func,
  logo: PropTypes.string,
  changeLanguage: PropTypes.func,
};

HeaderView.defaultProps = {
  onClickBurger: () => {},
  logo: '',
  changeLanguage: () => {},
};

export default HeaderView;
