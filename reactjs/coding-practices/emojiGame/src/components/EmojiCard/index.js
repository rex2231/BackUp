import './index.css'

const EmojiCard = props => {
  const {emojiItem, addEmojiId} = props
  const {emojiName, emojiUrl, id} = emojiItem
  const returnId = () => {
    addEmojiId(id)
  }

  return (
    <li>
      <button
        type="button"
        className="emoji-button emoji-container"
        onClick={returnId}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
