import { Component } from 'react'
import HomeItemView from './HomeItemView'
import styles from './HomeItem.module.scss'

class Home extends Component {
	state = {
		names: ['Denis', 'Make', 'Jane'],
	}

	getRandomName = () => {
		const { names } = this.state
		const randomIndex = Math.floor(Math.random() * names.length)
		return names[randomIndex]
	}

	addRandomName = () => {
		this.setState({
			names: [...this.state.names, this.getRandomName()],
		})
	}

	RemoveRandomName = () => {
		this.setState({
			names: this.state.names.filter(
				(name, index) =>
					index !== Math.floor(Math.random() * this.state.names.length)
			),
		})
	}

	render() {
		return (
			<HomeItemView
				names={this.state.names}
				addRandomName={this.addRandomName}
				RemoveRandomName={this.RemoveRandomName}
				styles={styles}
			/>
		)
	}
}

export default Home
