import './index.css'

const MoneyDetails = props => {
  const {details, balance, income, expenses} = props
  const {title, imgUrl, alt, bgColor, id, testid} = details
  let {amount} = details
  const cardStyle = {
    backgroundColor: bgColor,
  }

  if (id === 1) {
    amount = balance
  } else if (id === 2) {
    amount = income
  } else if (id === 3) {
    amount = expenses
  }

  return (
    <div className="money-details-card" style={cardStyle}>
      <img src={imgUrl} alt={alt} className="icon" />
      <div className="info-container">
        <p className="title">{title}</p>
        <p className="amount" data-testid={testid}>
          Rs {amount}
        </p>
      </div>
    </div>
  )
}

export default MoneyDetails
