import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import HeaderView from './HeaderView';
import styles from './Header.module.scss';

function Header() {
  const [burger, setBurger] = useState(false);

  const onClickBurger = useCallback(() => {
    setBurger((prevBurger) => !prevBurger);
  }, []);

  return (
    <HeaderView
      burger={burger}
      onClickBurger={onClickBurger}
      styles={styles}
      logo={logo}
      Link={Link}
    />
  );
}

export default Header;
