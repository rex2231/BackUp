const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItem

  return (
    <li>
      <img src={currencyLogo} alt={currencyName} />
      <p>{currencyName}</p>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
