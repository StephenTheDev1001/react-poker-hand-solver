// checks for flush
const flush = (hand: Card[]): Card[] | null => {
	const hearts = hand.filter((card) => card.suit === 'h')
	const spades = hand.filter((card) => card.suit === 's')
	const diamonds = hand.filter((card) => card.suit === 'd')
	const clubs = hand.filter((card) => card.suit === 'c')

	const arrSuits: Card[][] = [hearts, spades, diamonds, clubs]

	for (let i = 0; i < arrSuits.length; i++) {
		if (arrSuits[i].length >= 5) {
			// sort arrSuits[i] by value
			return arrSuits[i].sort((a, b) => b.value - a.value)
		}
	}

	return null
}

type Card = {
	suit: string
	value: number
	key: string
}

export default flush
