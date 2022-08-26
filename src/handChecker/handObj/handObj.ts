import deck from './deckOfCards'
import flush from './flush'
import straight from './straight'
import matchingCards from './matchingCards'

type Card = {
	suit: string
	value: number
	key: string
}

// returns object with hand values
function handObj(cardStrArr: string[]): any {
	const hand: Card[] = deck
		.filter((c) => {
			return cardStrArr.includes(c.key)
		})
		.sort((a, b) => b.value - a.value)
	console.log(hand)

	const straightFlush = (): Card[] | null => {
		return straight(flush(hand))
	}

	// four of a kind check
	const fourOfAKind = (): Card[] | null => {
		const x = matchingCards(hand)

		if (x[0].length === 4) {
			return hand[0].value === x[0][0].value
				? [...x[0], hand[4]]
				: [...x[0], hand[0]]
		}
		return null
	}

	const fullHouse = (): Card[] | null => {
		const fh = matchingCards(hand)

		if (fh[0].length === 3 && fh[1].length > 1) {
			return [...fh[0], ...fh[1].slice(0, 2)]
		}
		return null
	}

	// check 3 of a kind
	const threeOfAKind = (): Card[] | null => {
		const setHand = matchingCards(hand)
		if (matchingCards(hand)[0].length === 3) {
			return [...setHand[0], ...setHand[1]]
		}
		return null
	}

	const twoPair = (): Card[] | null => {
		const twoPairHand = matchingCards(hand)

		if (twoPairHand[0].length === 2 && twoPairHand[1].length === 2) {
			return [...twoPairHand[0], ...twoPairHand[1]]
		}
		return null
	}
	// check pair
	const pair = () => {
		const pairHand = matchingCards(hand)

		if (pairHand[0].length === 2) {
			return [...pairHand[0], ...pairHand[1]]
		}
		return null
	}
	return {
		hand,
		straightFlush: straightFlush(),
		fourOfAKind: fourOfAKind(),
		fullHouse: fullHouse(),
		flush: flush(hand),
		straight: straight(hand),
		threeOfAKind: threeOfAKind(),
		twoPair: twoPair(),
		pair: pair(),
		matchingCards: matchingCards(hand),
	}
}

export default handObj
