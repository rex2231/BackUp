import './index.css'

const AppointmentItem = props => {
  const {appointment, clickStar} = props
  const {id, apponTitle, apponDate, isStarred} = appointment

  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onStar = () => {
    clickStar(id)
  }

  return (
    <li className="appointment-card">
      <div>
        <h1 className="appointment-heading">{apponTitle}</h1>
        <p className="appointment-description">{apponDate}</p>
      </div>
      <button
        type="button"
        className="star-button"
        onClick={onStar}
        data-testid="star"
      >
        <img src={imgUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
