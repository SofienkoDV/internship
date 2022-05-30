import { useRef, useState } from 'react'
import styles from './Intro.module.scss'
import IntroView from './IntroView'

function Intro() {
	const myRef = useRef()

	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const _onMouseMove = e => {
		const width = myRef.current.offsetWidth
		const height = myRef.current.offsetHeight
		const oX = (e.nativeEvent.offsetX / width) * 100
		const oY = (e.nativeEvent.offsetY / height) * 100
		setX(oX)
		setY(oY)
	}

	const maskStyle = {
		'--maskX': x,
		'--maskY': y,
	}

	return (
		<IntroView
			myRef={myRef}
			_onMouseMove={_onMouseMove}
			maskStyle={maskStyle}
			styles={styles}
			textTitle={'Excepteur sint occaecat cupidatat non proident'}
			textSubtitle={
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			}
		/>
	)
}

export default Intro
