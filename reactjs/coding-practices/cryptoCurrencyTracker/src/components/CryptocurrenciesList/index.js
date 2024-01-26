import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {currencyData} = props
  return (
    <div>
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="bg-logo"
      />
      <h1>Coin Type</h1>
      <h1>USD</h1>
      <h1>EURO</h1>
      <ul>
        {currencyData.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} currencyItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
