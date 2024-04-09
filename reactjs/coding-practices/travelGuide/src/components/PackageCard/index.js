import './index.css'

const PackageCard = props => {
  const {cardData} = props
  const {description, name, imageUrl} = cardData

  return (
    <div className="card-container">
      <img className="package-img" src={imageUrl} alt={name} />
      <div className="package-details-container">
        <h1 className="package-details-heading">{name}</h1>
        <p className="package-details-description">{description}</p>
      </div>
    </div>
  )
}

export default PackageCard
