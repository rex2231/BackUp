import {Direction} from './styledComponents'

const GradientDirectionItem = props => {
  const {value, displayText, onChangeDirection, activeDirection} = props

  const changeDirection = () => {
    onChangeDirection(value)
  }

  return (
    <li>
      <Direction
        type="button"
        onClick={changeDirection}
        value={value}
        current={value === activeDirection}
      >
        {displayText}
      </Direction>
    </li>
  )
}

export default GradientDirectionItem
