const matchingCards = (hand: Card[]): Card[][] => {
	const uniqueValues: number[] = []

	// pushes unique values to array
	hand.forEach((card) => {
		if (!uniqueValues.includes(card.value)) {
			uniqueValues.push(card.value)
		}
	})

	// array of arrays of cards with matching values
	const matchingValues: Card[][] = []

	for (let i = 0; i < uniqueValues.length; i++) {
		const x: Card[] = []

		hand.forEach((card) => {
			if (card.value === uniqueValues[i]) {
				x.push(card)
			}
		})
		matchingValues.push(x)
	}

	return matchingValues.sort((a, b) => b.length - a.length)
}

type Card = {
	suit: string
	value: number
	key: string
}

export default matchingCards
