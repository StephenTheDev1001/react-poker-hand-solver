import React from 'react'
import DeckCard from './DeckCard'
import deckOfCards from '../handChecker/handObj/deckOfCards'

interface Props {
	hand: (string | null)[]
	setHand: (hand: (string | null)[]) => void
}

const Deck = (props: Props) => {
	return (
		<div className='deck-container'>
			<div className='suit-container flex m-2'>
				{deckOfCards.slice(0, 13).map((card) => {
					return <DeckCard card={card} />
				})}
			</div>
			<div className='suit-container flex m-2'>
				{deckOfCards.slice(13, 26).map((card) => {
					return <DeckCard card={card} />
				})}
			</div>
			<div className='suit-container flex m-2'>
				{deckOfCards.slice(26, 39).map((card) => {
					return <DeckCard card={card} />
				})}
			</div>
			<div className='suit-container flex m-2'>
				{deckOfCards.slice(39, 52).map((card) => {
					return <DeckCard card={card} />
				})}
			</div>
		</div>
	)
}
export default Deck
