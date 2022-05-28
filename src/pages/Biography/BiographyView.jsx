function BiographyView({ filterName, setValue, BiographyItem, styles }) {
	return (
		<div className={styles.container}>
			<div className={styles.BiographyForm}>
				<input
					className={styles.BiographyInput}
					type='text'
					placeholder="Шукати за ім'ям..."
					onChange={e => setValue(e.target.value)}
				/>
			</div>

			<div className={styles.Biography}>
				{filterName.map(item => (
					<BiographyItem
						key={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						cash={item.cash}
						cryptocurrency={item.cryptocurrency.map(({ amount }) => amount)}
					/>
				))}
			</div>
		</div>
	)
}

export default BiographyView
