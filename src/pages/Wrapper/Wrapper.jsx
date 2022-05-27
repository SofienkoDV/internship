import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import Team from '../../components/Team/Team'
import Works from '../../components/Works/Works'

import styles from './Wrapper.module.scss'
import 'macro-css'

function Wrapper() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Intro />
			<Features />
			<Works />
			<Team />
			<Footer />
		</div>
	)
}

export default Wrapper
