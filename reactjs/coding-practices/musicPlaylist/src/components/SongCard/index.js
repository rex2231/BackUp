import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongCard = props => {
  const {song, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = song

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="track-container" key={id}>
      <div className="track-image-container">
        <img className="track-image" src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-btn-container">
        <p>{duration}</p>
        <button
          type="button"
          className="delete-button"
          aria-label="delete-button"
          onClick={onDeleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongCard
