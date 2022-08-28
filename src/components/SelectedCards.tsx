import SelectedCard from './SelectedCard'
import deckOfCards from '../handChecker/handObj/deckOfCards'
import handChecker from '../handChecker/handChecker'

interface Props {
	setHand: (hand: (string | null)[]) => void
	hand: (string | null)[]
}

const SelectedCards = (props: Props) => {
	const { setHand, hand } = props
	// flattens hand to only strings
	const stringOnlyHand = hand.flatMap((f) => (f ? [f] : []))

	const message: string = hand.every((c) => c !== null)
		? handChecker(stringOnlyHand).msg
		: 'Select more cards'

	return (
		<div className='selected-cards-container top-0 sticky bg-gray-600 text-white'>
			<p className='text-center pt-3'>Click Cards to Select or Deselect</p>
			<div className='flex justify-center p-6'>
				{hand.map((card) => {
					return <SelectedCard hand={hand} setHand={setHand} card={card} />
				})}
			</div>
			<div className='message flex justify-center'>
				<h1 className='text-5xl pb-6'>{message}</h1>
			</div>
		</div>
	)
}
export default SelectedCards
