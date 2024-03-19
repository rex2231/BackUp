import './index.css'

const PlanetItem = props => {
  const {item} = props
  return (
    <div key={item.id} className="planet-item-container">
      <img
        src={item.imageUrl}
        alt={`planet ${item.name}`}
        className="planet-img"
      />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default PlanetItem
