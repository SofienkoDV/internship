/* eslint-disable react/forbid-prop-types */
/* eslint-disable object-curly-newline */
import cn from 'classnames';
import PropTypes from 'prop-types';

function HeaderView({ burger, onClickBurger, styles, logo, Link }) {
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
            <a className={styles.nav__link} href="https://wowjs.uk/">
              About
            </a>
            <a className={styles.nav__link} href="https://wowjs.uk/">
              Gallery
            </a>
            <a className={styles.nav__link} href="https://wowjs.uk/">
              Features
            </a>
            <Link className={styles.nav__link} to="biography">
              Biography
            </Link>
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
  styles: PropTypes.object,
  logo: PropTypes.string,
  Link: PropTypes.object,
};

HeaderView.defaultProps = {
  onClickBurger: () => {},
  styles: {},
  logo: '',
  Link: {},
};

export default HeaderView;
