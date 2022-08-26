import React, { useState } from 'react'
import './App.css'
import handChecker from './handChecker/handChecker'

const App = () => {
	const [hand, setHand]: [(string | null)[], any] = useState([
		null,
		null,
		null,
		null,
		null,
	])

	// hand is full of strings
	const handFull = hand.every((card) => typeof card === 'string')

	return <div className='App'></div>
}

export default App
