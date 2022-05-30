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
		this.setState(prevState => ({
			names: [...prevState.names, this.getRandomName()],
		}))
	}

	RemoveRandomName = () => {
		this.setState(prevState => ({
			names: prevState.names.filter(name => name !== this.getRandomName()),
		}))
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
