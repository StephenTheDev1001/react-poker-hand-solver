import handObj from './handObj/handObj'

const handChecker = (handStr: string[]) => {
	const {
		hand,
		straightFlush,
		fourOfAKind,
		fullHouse,
		flush,
		straight,
		threeOfAKind,
		twoPair,
		pair,
	} = handObj(handStr)

	console.log(handObj(handStr))

	if (straightFlush && straightFlush[0].value === 14) {
		return { hand: straightFlush, msg: 'Royal Flush' }
	} else if (straightFlush) {
		return { hand: straightFlush, msg: 'Straight Flush' }
	} else if (fourOfAKind) {
		return { hand: fourOfAKind, msg: 'Four of a Kind' }
	} else if (fullHouse) {
		return { hand: fullHouse, msg: 'Full House' }
	} else if (flush) {
		return { hand: flush.slice(0, 5), msg: 'Flush' }
	} else if (straight) {
		return { hand: straight, msg: 'Straight' }
	} else if (threeOfAKind) {
		return { hand: threeOfAKind, msg: 'Three of a Kind' }
	} else if (twoPair) {
		return { hand: twoPair, msg: 'Two Pair' }
	} else if (pair) {
		return { hand: pair, msg: 'Pair' }
	} else {
		return { hand: hand, msg: 'High Card' }
	}
}

type Card = {
	suit: string
	value: number
	key: string
}

export default handChecker
