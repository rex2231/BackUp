import './index.css'

function ThumbnailItem(props) {
  const {image, setImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = image

  const onClickThumbnail = () => {
    setImage(image)
  }

  const selectedThumbnail = isActive ? '' : 'highlight'

  return (
    <li className="list-item">
      <button type="button" className={`thumbnail-button ${selectedThumbnail}`}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
