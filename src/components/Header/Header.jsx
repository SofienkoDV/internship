import { useCallback, useState } from 'react';
import logo from '../../assets/logo.png';
import HeaderView from './HeaderView';

function Header() {
  const [burger, setBurger] = useState(false);

  const onClickBurger = useCallback(() => {
    setBurger((prevBurger) => !prevBurger);
  }, []);

  return (
    <HeaderView
      burger={burger}
      onClickBurger={onClickBurger}
      logo={logo}
    />
  );
}

export default Header;
