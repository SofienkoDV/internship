import axios from 'axios'
import AppContext from './context'
import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Biography, Wrapper } from './pages'

class App extends Component {
	state = {
		items: [],
		features: [],
	}

	async componentDidMount() {
		try {
			const [itemsResponse, featuresResponse] = await Promise.all([
				axios.get('https://618115078bfae60017adfe03.mockapi.io/items'),
				axios.get('https://618115078bfae60017adfe03.mockapi.io/arrFeatures'),
			])

			this.setState({
				features: featuresResponse.data,
				items: itemsResponse.data,
			})
		} catch (error) {
			alert('Помилка при запиті даних :(')
			console.log(error)
		}
	}

	render() {
		const { items, features } = this.state

		return (
			<AppContext.Provider value={{ items, features }}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Wrapper />} />
						<Route path='home' element={<Home />} />
						<Route path='biography' element={<Biography />} />
					</Routes>
				</BrowserRouter>
			</AppContext.Provider>
		)
	}
}

export default App
