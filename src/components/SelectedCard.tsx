import { useState } from 'react'

interface Props {
  card: string | null
  setHand: (hand: (string | null)[]) => void
  hand: (string | null)[]
}

const SelectedCard = (props: Props) => {
  const { card } = props
  const indexOfNull = props.hand.indexOf(null)
  const indexOfCard = props.hand.indexOf(card)
  const newHand = [...props.hand]

  const imgSrc = props.card
    ? require(`../assets/card_imgs/${props.card}.png`)
    : require('../assets/card-back.png')

  const onClick = () => {
    if (props.card) {
      newHand[indexOfCard] = null
      props.setHand(newHand)
    }
  }
  return (
    <div className='w-36 h-[210px]' onClick={onClick}>
      <img src={imgSrc} alt='' />
    </div>
  )
}
export default SelectedCard
