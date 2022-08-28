import React from 'react'
import DeckCard from './DeckCard'
import deckOfCards from '../handChecker/handObj/deckOfCards'
import { v4 as uuidv4 } from 'uuid'

interface Props {
	hand: (string | null)[]
	setHand: (hand: (string | null)[]) => void
}

const Deck = (props: Props) => {
	const { hand, setHand } = props
	return (
		<div className='deck-container flex justify-center md:block'>
			<div className='suit-container flex flex-col md:flex-row m-2 justify-center'>
				{deckOfCards.slice(0, 13).map((card) => {
					return (
						<DeckCard
							card={card.key}
							setHand={setHand}
							hand={hand}
							key={uuidv4()}
						/>
					)
				})}
			</div>
			<div className='suit-container flex flex-col md:flex-row m-2 justify-center'>
				{deckOfCards.slice(13, 26).map((card) => {
					return (
						<DeckCard
							card={card.key}
							setHand={setHand}
							hand={hand}
							key={uuidv4()}
						/>
					)
				})}
			</div>
			<div className='suit-container flex flex-col md:flex-row m-2 justify-center'>
				{deckOfCards.slice(26, 39).map((card) => {
					return (
						<DeckCard
							card={card.key}
							setHand={setHand}
							hand={hand}
							key={uuidv4()}
						/>
					)
				})}
			</div>
			<div className='suit-container flex flex-col md:flex-row m-2 justify-center'>
				{deckOfCards.slice(39, 52).map((card) => {
					return (
						<DeckCard
							card={card.key}
							setHand={setHand}
							hand={hand}
							key={uuidv4()}
						/>
					)
				})}
			</div>
		</div>
	)
}
export default Deck
