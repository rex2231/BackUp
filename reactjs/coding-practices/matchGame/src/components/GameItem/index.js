import './index.css'

const GameItem = props => {
  const {imgItem, checkImg} = props
  const {id, thumbnailUrl} = imgItem

  const checkItem = () => {
    checkImg(id)
  }

  return (
    <li>
      <button type="button" onClick={checkItem}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default GameItem
