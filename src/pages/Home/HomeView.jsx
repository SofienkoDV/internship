function HomeView({ visible, toggleVisibility, HomeItem, styles }) {
	return (
		<div className='mt-50'>
			{visible && <HomeItem />}
			<div className={styles.centerHome}>
				<button className={styles.buttonHome} onClick={toggleVisibility}>
					Показати / Сховати
				</button>
			</div>
		</div>
	)
}

export default HomeView
