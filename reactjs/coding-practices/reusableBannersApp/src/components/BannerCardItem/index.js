const Banner = props => {
  const {bannerDetails} = props
  const {className, headerText, description, id} = bannerDetails
  return (
    <li className={`banner-card ${className}`} key={id}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <div>
          <button type="button" className="showmore-button">
            Show More
          </button>
        </div>
      </div>
    </li>
  )
}

export default Banner
