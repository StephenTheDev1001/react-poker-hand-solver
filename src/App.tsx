import React, { useState } from 'react'
import './App.css'
import handChecker from './handChecker/handChecker'
import Deck from './components/Deck'
import SelectedCards from './components/SelectedCards'

const App: React.FC = () => {
	const [hand, setHand] = useState<(string | null)[]>([
		null,
		null,
		null,
		null,
		null,
	])

	// boolean that determines if hand is full
	const handFull = hand.every((card) => typeof card === 'string')

	return (
		<div className='App h-screen'>
			<SelectedCards hand={hand} setHand={setHand} />
			<Deck hand={hand} setHand={setHand} />
		</div>
	)
}

export default App
