import { Component } from 'react'

class HomeItemView extends Component {
	render() {
		const { names, addRandomName, RemoveRandomName, styles } = this.props
		return (
			<>
				<div className={styles.centerHome}>
					<ul className={styles.listUl}>
						{names.map((name, index) => (
							<li className={styles.listLi} key={index}>
								{name}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.centerHome}>
					<button className={styles.buttonHome} onClick={addRandomName}>
						Додати ім'я
					</button>
				</div>
				<div className={styles.centerHome}>
					<button className={styles.buttonHome} onClick={RemoveRandomName}>
						Видалити ім'я
					</button>
				</div>
			</>
		)
	}
}

export default HomeItemView
