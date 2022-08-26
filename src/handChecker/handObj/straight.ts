// returns array of straight or null
const straight = (hand: Card[] | null): Card[] | null => {
	if (hand === null) {
		return null
	}
	// filter pairs/trips
	const uniqueValues: number[] = []
	const uniqueValuesHand: Card[] = []

	for (let i = 0; i < hand.length; i++) {
		if (!uniqueValues.includes(hand[i].value)) {
			uniqueValues.push(hand[i].value)
			uniqueValuesHand.push(hand[i])
		}
	}
	// array of slices
	const sliceArr: Card[][] = [
		uniqueValuesHand.slice(0, 5),
		uniqueValuesHand.slice(1, 6),
		uniqueValuesHand.slice(2, 7),
	]

	// loop that returns an element of sliceArr that's longer than 4
	for (let i = 0; i < sliceArr.length; i++) {
		if (
			sliceArr[i].every(
				(el, index, arr) => arr[0].value === el.value + index
			) &&
			sliceArr[i].length > 4
		) {
			return sliceArr[i]
		}
	}
	// check for wheel
	const wheel = [5, 4, 3, 2, 14]
	const wheelHand: any = uniqueValuesHand.filter((c) => wheel.includes(c.value))
	// push ace to end
	const ace: Card = wheelHand.shift()
	wheelHand.push(ace)

	return wheelHand.length === 5 ? wheelHand : null
}

type Card = {
	suit: string
	value: number
	key: string
}

export default straight
