import './index.css'

const EventItem = props => {
  const {eventItem, onSelect} = props
  const {registrationStatus, imageUrl, name, location} = eventItem

  const onSelectEvent = () => {
    onSelect(registrationStatus)
  }
  return (
    <li className="event-card">
      <button type="button" onClick={onSelectEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
