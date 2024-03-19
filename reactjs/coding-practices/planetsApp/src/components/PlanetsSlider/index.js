import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="react-slick-bg" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(item => (
          <PlanetItem item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
