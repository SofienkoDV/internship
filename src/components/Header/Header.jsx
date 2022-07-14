import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import HeaderView from './HeaderView';

function Header() {
  const [burger, setBurger] = useState(false);

  const onClickBurger = useCallback(() => {
    setBurger((prevBurger) => !prevBurger);
  }, []);

  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <HeaderView
      burger={burger}
      onClickBurger={onClickBurger}
      logo={logo}
      changeLanguage={changeLanguage}
    />
  );
}

export default Header;
