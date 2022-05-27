import styles from './Intro.module.scss'

function Intro() {
	return (
		<div className={styles.intro}>
			<div className={styles.container}>
				<div className={styles.intro__inner}>
					<h1 className={styles.intro__title}>
						Excepteur sint occaecat cupidatat non proident
					</h1>
					<h2 className={styles.intro__subtitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</h2>
					<a className={styles.btn} href='https://wowjs.uk/'>
						Find Out More
					</a>
				</div>
			</div>
		</div>
	)
}

export default Intro
