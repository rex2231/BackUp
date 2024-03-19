import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {item} = props

  return (
    <li>
      <Popup
        modal
        trigger={
          <button type="button" aria-label="Thumbnail Button" key={item.id}>
            <img src={item.thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
              aria-label="Close modal dialog"
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={item.videoUrl} controls />
          </>
        )}
      </Popup>
    </li>
  )
}

export default MovieItem
