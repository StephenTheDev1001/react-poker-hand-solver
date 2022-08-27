import { useState } from 'react'

interface Props {
	card: {
		key: string
		suit: string
		value: number
	}
}

const DeckCard = (props: Props) => {
	const { key } = props.card

	// selected state
	const [selected, setSelected] = useState(false)

	const imgSrc = selected
		? require('../assets/card-back.png')
		: require(`../assets/card_imgs/${key}.png`)

	// onClick event arrow function
	const onClick = () => {
		setSelected(!selected)
	}
	return (
		<div className='w-36' onClick={onClick}>
			<img src={imgSrc} alt={key} />
		</div>
	)
}
export default DeckCard
