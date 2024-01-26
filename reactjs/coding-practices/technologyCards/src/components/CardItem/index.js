const TechCard = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <li className={`${className} card`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="image-container">
          <img src={`${imgUrl}`} alt={`${title}`} />
        </div>
      </div>
    </li>
  )
}

export default TechCard
