import { useState } from 'react'

interface Props {
	card: string
	setHand: (hand: (string | null)[]) => void
	hand: (string | null)[]
	key: string
}

const DeckCard = (props: Props) => {
	const { card } = props
	const indexOfNull = props.hand.indexOf(null)
	const indexOfCard = props.hand.indexOf(card)
	const newHand = [...props.hand]

	let imgSrc =
		indexOfCard === -1
			? require(`../assets/card_imgs/${card}.png`)
			: require('../assets/card-back.png')

	const onClick = () => {
		if (indexOfCard === -1 && indexOfNull > -1) {
			newHand[indexOfNull] = card
			props.setHand(newHand)
		} else {
			newHand[indexOfCard] = null
			props.setHand(newHand)
		}
	}
	return (
		<div className='w-24' onClick={onClick}>
			<img src={imgSrc} alt={card} />
		</div>
	)
}
export default DeckCard
