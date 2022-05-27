import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import AppContext from './context'
import Wrapper from './components/Wrapper/Wrapper'
import Home from './pages/Home/Home'
import Biography from './pages/Biography/Biography'

function App() {
	const [items, setItems] = useState([])
	const [features, setFeatures] = useState([])

	useEffect(() => {
		async function fetchData() {
			try {
				const [itemsResponse, featuresResponse] = await Promise.all([
					axios.get('https://618115078bfae60017adfe03.mockapi.io/items'),
					axios.get('https://618115078bfae60017adfe03.mockapi.io/arrFeatures'),
				])

				setFeatures(featuresResponse.data)
				setItems(itemsResponse.data)
			} catch (error) {
				alert('Помилка при запиті даних :(')
				console.log(error)
			}
		}

		fetchData()
	}, [])

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

export default App
