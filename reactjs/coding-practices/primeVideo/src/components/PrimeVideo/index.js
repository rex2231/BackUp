import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-banner"
      />
      <div className="bottom-container">
        <h1>Action Movies</h1>
        <MoviesSlider
          ThumbnailList={moviesList.filter(
            item => item.categoryId === 'ACTION',
          )}
        />
        <h1>Comedy Movies</h1>
        <MoviesSlider
          ThumbnailList={moviesList.filter(
            item => item.categoryId === 'COMEDY',
          )}
        />
      </div>
    </div>
  )
}

export default PrimeVideo
