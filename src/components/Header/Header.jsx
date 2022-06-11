import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import HeaderView from './HeaderView';
import styles from './Header.module.scss';

function Header() {
  const [burger, setBurger] = useState(false);

  const onClickBurger = useCallback(() => {
    // Чи можливо зробити якось інакше щоб не сварився eslint?
    // eslint-disable-next-line no-shadow
    setBurger((burger) => !burger);
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
