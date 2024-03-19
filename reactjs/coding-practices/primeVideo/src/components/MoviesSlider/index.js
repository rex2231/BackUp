import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'reactjs-popup/dist/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import './index.css'

const MovieSlider = props => {
  const {ThumbnailList} = props
  const settings = {
    slidesToShow: 4,
  }

  return (
    <div className="slider-container">
      <ul>
        <Slider {...settings}>
          {ThumbnailList.map(item => (
            <>
              <MovieItem item={item} />
            </>
          ))}
        </Slider>
      </ul>
    </div>
  )
}

export default MovieSlider
