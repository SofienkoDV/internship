import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import logo from '../../assets/logo.png'
import HeaderView from './HeaderView'
import styles from './Header.module.scss'

function Header() {
	const [burger, setBurger] = useState(false)
	const burgerMenu = cn(burger ? styles.navShow : styles.nav)

	const onClickBurger = useCallback(() => {
		setBurger(burger => !burger)
	}, [])

	return (
		<HeaderView
			burgerMenu={burgerMenu}
			onClickBurger={onClickBurger}
			styles={styles}
			logo={logo}
			Link={Link}
		/>
	)
}

export default Header
